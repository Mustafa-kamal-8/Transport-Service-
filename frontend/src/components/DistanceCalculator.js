import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const DistanceCalculator = ({ pcity, dcity, onFinalDistanc }) => {
  const [origin, setOrigin] = useState(pcity);
  const [destination, setDestination] = useState(dcity);
  const [distance, setDistance] = useState(null);
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState('');

  // Define a custom location symbol icon
  const customLocationIcon = new L.Icon({
    iconUrl: '/images/placeholder.png', // Replace with the path to your location symbol image
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point as needed
    popupAnchor: [0, -32], // Adjust the popup anchor point as needed
  });

  const calculateDistance =  () => {
    if (!origin || !destination) {
      setError('Please enter both origin and destination.');
      return;
    }

    geocodeLocation(origin, 'origin', (originData) => {
      geocodeLocation(destination, 'destination', (destinationData) => {
        const newMarkers = [
          {
            position: [originData.lat, originData.lon],
            name: 'Origin',
            description: origin,
          },
          {
            position: [destinationData.lat, destinationData.lon],
            name: 'Destination',
            description: destination,
          },
        ];

        setMapCenter([originData.lat, originData.lon]);
        setMarkers(newMarkers);
        setError('');

        calculateDistanceBetweenLocations(originData, destinationData);
        // finalDistanc(distance)
      });
    });
  };

  const geocodeLocation = (location, locationType, callback) => {
    axios
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
      .then((response) => {
        const locationData = response.data[0];

        if (!locationData) {
          setError(`${locationType} not found. Please check the spelling and try again.`);
        } else {
          const { lat, lon } = locationData;
          callback({ lat: parseFloat(lat), lon: parseFloat(lon) });
        }
      })
      .catch((error) => {
        console.error(`Error fetching ${locationType} data:`, error); // Log the entire response object for detailed error information
        
      });
  };

  const calculateDistanceBetweenLocations = (originData, destinationData) => {
    const earthRadius = 6371;
    const dLat = (destinationData.lat - originData.lat) * (Math.PI / 180);
    const dLon = (destinationData.lon - originData.lon) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(originData.lat * (Math.PI / 180)) * Math.cos(destinationData.lat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const calculatedDistance = earthRadius * c;

    setDistance(calculatedDistance.toFixed(2));
    // finalDistanc(calculatedDistance.toFixed(2));
    // finalDistanc(calculatedDistance.toFixed(2));
    console.log(distance);
  };

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  useEffect(() => {
    onFinalDistanc(distance);
  }, [distance, onFinalDistanc]);

  return (
    <div className="leaflet-map">
      <MapContainer center={mapCenter} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customLocationIcon}>
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="distance-form">
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" value={origin} onChange={handleOriginChange} />
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" value={destination} onChange={handleDestinationChange} />
        <button onClick={calculateDistance}>Show Distance</button>
        {error && <p className="error">{error}</p>}
        {distance !== null && <p>Distance: {distance} km</p>}
      </div>
    </div>
  );
};

export default DistanceCalculator;

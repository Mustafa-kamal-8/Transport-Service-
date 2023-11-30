// controller/vehicleController.js
const Vehicle = require('../Model/vehicleModel');

exports.createVehicle = async (req, res) => {
  try {
    const {
      vehicleType,
      vehicleName,
      vehicleNumber,
      ownerName,
      ownerDL,
      Price,
    } = req.body;
    

    const newVehicle = new Vehicle({
      vehicleType,
      vehicleName,
      vehicleNumber,
      ownerName,
      ownerDL,
      Price,
    
    });
    console.log('vehicle information data')
    console.log('vehicle type:',vehicleType)
    console.log('vehicle name:',  vehicleName)
    

    await newVehicle.save();

    res.status(201).json(newVehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching vehicles' });
  }
};


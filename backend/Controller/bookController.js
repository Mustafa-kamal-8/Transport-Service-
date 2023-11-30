
const Booking = require('../Model/bookVehicles');

exports.bookingVehicle = async (req, res) => {
  try {
    // Extract data from the request body
    const { vehicleType, selectDate, selectGoodType, weight, phoneNo } = req.body.formData;
    const finalDistance = parseFloat(req.body.finalDistance); // Convert finalDistance to a number

    // Convert selectDate to a Date object
    const formattedSelectDate = new Date(selectDate);

    // Create a new booking using the Booking model
    
    console.log(req.body.formData)
    console.log(req.body.finalDistance)

    let val;

    if (vehicleType === 'Truck') {
      val = 50 * finalDistance;
    } else {
      val = 30 * finalDistance; // Fix the typo in finalDistance
    }
    val = Math.floor(val);
     // Create a new booking using the Booking model
     const newBooking = new Booking({
      vehicleType,
      selectDate: formattedSelectDate,
      selectGoodType,
      weight: parseInt(weight), // Convert weight to a number if needed
      phoneNo,
      finalDistance,
      totalPrice: val,
    });

    // Save the booking to the database
    await newBooking.save();

   const bookId =  await Booking.find(newBooking).select('_id')
    // .then(res=>{
    //   res.json({id: res._id})
    // })

    // Respond with the saved booking data
     res.status(201).json(bookId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const {id} = req.body
    const booking = await Booking.find({_id:id});
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching vehicles' });
  }
};

exports.getBooklist = async (req, res) => {
  try {
    const Booking = await Booking.find();
    res.status(200).json(Booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching vehicles' });
  }
};

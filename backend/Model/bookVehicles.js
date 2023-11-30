//import mongoose from "mongoose";
const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
  vehicleType: String,
  selectDate: Date,
  selectGoodType: String,
  weight: Number,
  phoneNo: String,
  finalDistance: Number,
  totalPrice: Number
        
})

const Booking = mongoose.model('Booking',bookingSchema );
module.exports = Booking;
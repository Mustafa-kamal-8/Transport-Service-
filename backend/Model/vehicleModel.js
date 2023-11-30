// Model/vehicleModel.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleType: String,
  vehicleName: String,
  vehicleNumber: String,
  ownerName: String,
  ownerDL: String,
  Price: String,
  
});

module.exports = mongoose.model('Vehicle', vehicleSchema);

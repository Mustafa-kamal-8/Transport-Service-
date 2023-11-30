//Routes/ api.js
const express = require('express');
const vehicleController = require('../Controller/vehicleController');
const { register, Login } = require('../Controller/UserController'); 
const bookController = require('../Controller/bookController')


const router = express.Router();



router.post('/vehiclesubmit', vehicleController.createVehicle);
router.post('/register', register);
router.post('/Login', Login);
router.get('/vehicles', vehicleController.getAllVehicles)
router.get('/Booklist', bookController.getBooklist)
router.post('/bookingsubmit', bookController.bookingVehicle );
router.post('/bookdetails', bookController.getBookDetails);



module.exports = router;

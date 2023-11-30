const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const vehicleRoutes = require('../Routes/api');
const Api = require('./Routes/api')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // Choose a single port (e.g., 5000)


// mongoose.connect('mongodb://localhost/vehicle-form-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (for images)
app.use(cors());

app.use('/Routes/api', Api);

const mongourl = "mongodb+srv://mustafa17:jecmca17@cluster17.uatyzaf.mongodb.net/Transport_Service?retryWrites=true&w=majority";

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  const router = require('./Routes/api'); // Import the 'api' router
  app.use('/api', router); // Use the 'api' router
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error(err);
});

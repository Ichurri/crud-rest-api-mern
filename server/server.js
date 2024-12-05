const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
require('dotenv').config()

const app = express();

const port = config.port || 5000;
// const mongoURI = config.mongoURI;
const mongoURI = 'mongodb+srv://santiagoiturrivargas04:rym6wAaAQZIhpXA5@cluster0.gpqdk.mongodb.net';
const frontendUrl = config.frontendUrl;


app.use(cors
  ({
    origin: frontendUrl,
  })
);
app.use(bodyParser.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const studentRoutes = require('./routes/students.routes');
app.use('/students', studentRoutes);

app.listen(port, () => console.log(`Server running`));
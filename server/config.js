require('dotenv').config(); 

module.exports = {
    port: process.env.PORT || 5000, 
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/students',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173'
  };
  
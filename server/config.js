require('dotenv').config(); 

module.exports = {
    port: process.env.PORT || 5000, 
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://santiagoiturrivargas04:rym6wAaAQZIhpXA5@cluster0.gpqdk.mongodb.net',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173'
  };
  
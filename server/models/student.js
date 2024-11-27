const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  ci: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  career: { 
    type: String, 
    required: true 
  }
}, { versionKey: false });

module.exports = mongoose.model('student', StudentSchema);
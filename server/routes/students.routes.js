const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create
router.post('/', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    ci: req.body.ci,
    career: req.body.career,
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Udpate
router.put('/:ci', async (req, res) => {
  try {
    const ci = Number(req.params.ci);

    if (isNaN(ci)) return res.status(400).json({ message: 'Invalid ci format. Must be a number.' });


    const student = await Student.findOneAndUpdate(
      { ci: ci },
      {
        name: req.body.name,
        career: req.body.career,
      },
      { new: true }
    );

    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete
router.delete('/:ci', async (req, res) => {
  try {
    const ci = Number(req.params.ci); 

    if (isNaN(ci)) return res.status(400).json({ message: 'Invalid ci format. Must be a number.' });

    const student = await Student.findOne({ ci: ci });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    await Student.deleteOne({ ci: ci });
    res.json({ message: 'Estudiante eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

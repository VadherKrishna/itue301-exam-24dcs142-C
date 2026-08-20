const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// Demonstrates a successful save
router.post('/patient', async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ success: true, data: patient });
  } catch (err) {
    // Meaningful error instead of raw Mongoose error
    res.status(400).json({ success: false, message: err.message });
  }
});

// Demonstrates a validation failure (e.g. invalid bloodGroup)
router.post('/patient/invalid-test', async (req, res) => {
  try {
    const patient = await Patient.create({
      name: 'Test Patient',
      email: `test${Date.now()}@example.com`,
      bloodGroup: 'Z+', // invalid on purpose
      age: 25,
    });
    res.status(201).json({ success: true, data: patient });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Validation failed: ' + err.message,
    });
  }
});

router.post('/doctor', async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({ success: true, data: doctor });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.post('/appointment', async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
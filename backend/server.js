require('dotenv').config();
const express = require('express');
const cors = require('cors');

const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');

const appointmentsRouter = require('./routes/appointments');
const doctorsRouter = require('./routes/doctors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger); // applied globally

app.use('/api/v1/appointments', appointmentsRouter);
app.use('/api/v1/doctors', doctorsRouter);

// Test route to confirm server works
app.get('/', (req, res) => {
  res.send('Hospital Appointment System API is running');
});

app.use(errorHandler); // must be LAST middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import React, { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';

function BookingPage() {
  // State 1: form data (patient name, date, time slot)
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    timeSlot: '',
  });

  // State 2: selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState('');

  // Hardcoded doctor options for now (real list comes from API in Task 4)
  const doctorOptions = ['Dr. Mehta', 'Dr. Shah', 'Dr. Rao'];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Appointment submitted:', { ...formData, doctorName: selectedDoctor });
  }

  return (
    <div>
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name: </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Doctor Name: </label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">-- Select Doctor --</option>
            {doctorOptions.map((doc) => (
              <option key={doc} value={doc}>{doc}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Time Slot: </label>
          <input
            type="text"
            name="timeSlot"
            placeholder="e.g. 10:00 AM"
            value={formData.timeSlot}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>

      {/* Live preview as state changes - satisfies "display entered value as state changes" */}
      <h3>Live Preview</h3>
      <p>Patient Name: {formData.patientName || '(not entered yet)'}</p>
      <p>Selected Doctor: {selectedDoctor || '(none selected)'}</p>

      <h3>Appointment Card Preview</h3>
      <AppointmentCard
        patientName={formData.patientName || 'N/A'}
        doctorName={selectedDoctor || 'N/A'}
        date={formData.date || 'N/A'}
        timeSlot={formData.timeSlot || 'N/A'}
        status="pending"
      />
    </div>
  );
}

export default BookingPage;
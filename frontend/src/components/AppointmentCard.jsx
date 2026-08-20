function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status
}) {
  return (
    <div className="appointment-card">
      <h3>Appointment</h3>

      <p><b>Patient:</b> {patientName}</p>
      <p><b>Doctor:</b> {doctorName}</p>
      <p><b>Date:</b> {date}</p>
      <p><b>Time:</b> {timeSlot}</p>

      <p>
        <b>Status:</b>{" "}
        <span className={`status ${status}`}>
          {status}
        </span>
      </p>
    </div>
  );
}

export default AppointmentCard;
function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Raj Patel",
      specialisation: "Cardiologist"
    },
    {
      name: "Dr. Priya Shah",
      specialisation: "Dermatologist"
    },
    {
      name: "Dr. Amit Mehta",
      specialisation: "General Physician"
    }
  ];

  return (
    <div>
      <h1>Our Doctors</h1>

      {doctors.map((doctor, index) => (
        <div key={index}>
          <h3>{doctor.name}</h3>
          <p>Specialisation: {doctor.specialisation}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorsPage;
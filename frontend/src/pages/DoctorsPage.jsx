import React, { useState, useEffect } from 'react';

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/v1/doctors');
        if (!res.ok) throw new Error('Failed to fetch doctors');
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Our Doctors</h2>
      {data.map((doc) => (
        <div key={doc.id} className="appointment-card">
          <p><strong>Name:</strong> {doc.name}</p>
          <p><strong>Specialisation:</strong> {doc.specialisation}</p>
          <p><strong>Available:</strong> {doc.available ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorsPage;
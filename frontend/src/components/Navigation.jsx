import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>{' | '}
      <Link to="/doctors">Doctors</Link>{' | '}
      <Link to="/booking">Booking</Link>
    </nav>
  );
}

export default Navigation;
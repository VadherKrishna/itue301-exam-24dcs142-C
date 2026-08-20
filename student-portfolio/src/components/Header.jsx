function Header({ name, color }) {
  return (
    <header style={{ color: color }}>
      <h1>Student Portfolio</h1>
      <h2>{name}</h2>
    </header>
  );
}

export default Header;
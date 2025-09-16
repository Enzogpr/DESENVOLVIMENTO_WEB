function Navigation() {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", padding: 0 }}>
        <li style={{ marginRight: "10px" }}><a href="#">POKEDEX</a></li>
        <li style={{ marginRight: "10px" }}><a href="pagina2.html">ANTERIOR</a></li>
        <li style={{ marginRight: "10px" }}><a href="#">PRÓXIMO</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

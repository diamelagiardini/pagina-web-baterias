import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/servicios">SERVICIOS</Link>
      <Link to="/baterias">BATERIAS</Link>
      <Link to="/contacto">CONTACTO</Link>
      <Link to="/zona-cobertura">ZONA DE COBERTURA</Link>
    </nav>
  );
};

export default Nav;

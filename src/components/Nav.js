import { Link } from "react-router-dom";
import "../styles/Fuentes.css";
const Nav = () => {
  return (
    <nav className="fuente-titulos-principales">
      <Link
        className="links separacion-links-nav tamanio-titulo-principal fuente-titulo-principal color-fuente-general"
        to="/"
      >
        HOME
      </Link>
      <Link
        className="links separacion-links-nav tamanio-titulo-principal fuente-titulo-principal color-fuente-general"
        to="/servicios"
      >
        SERVICIOS
      </Link>
      <Link
        className="links separacion-links-nav tamanio-titulo-principal fuente-titulo-principal color-fuente-general"
        to="/baterias"
      >
        BATERIAS
      </Link>
     
      <Link
        className="links separacion-links-nav tamanio-titulo-principal fuente-titulo-principal color-fuente-general"
        to="/zona-cobertura"
      >
        ZONA DE COBERTURA
      </Link>
      <Link
        className="links separacion-links-nav tamanio-titulo-principal fuente-titulo-principal color-fuente-principal"
        to="/contacto"
      >
        CONTACTO
      </Link>
    </nav>
  );
};

export default Nav;

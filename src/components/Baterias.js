import { Link } from "react-router-dom";
import "../styles/Baterias.css";
import Footer from "./Footer";

const Baterias = () => {
  return (
    <>
      <div className="contenedor-padre-baterias">
        <div className="contenedor-imagenes-baterias">
          <Link to="/baterias/moura">
            <div className="contenedor-imagen-bateria">
              <img
                className="zoom-moura"
                src="https://s34918.pcdn.co/wp-content/themes/moura_portal_pagely/assets/images/img-share.jpg"
                alt="bateria moura"
              ></img>
            </div>
          </Link>
          <Link to="/baterias/williard">
            <div className="contenedor-imagen-bateria">
              <img
                className="zoom-williard"
                src="https://stadleraccesorios.com/wp-content/uploads/2020/01/logo_willard-23.jpg"
                alt="bateria williard"
              ></img>
            </div>
          </Link>

          <Link to="/baterias/oeste">
            <div className="contenedor-imagen-bateria">
              <img
                className="zoom-oeste"
                src="https://bateriasoeste.com.ar/wp-content/uploads/2019/11/baterias-oeste-opengraph.jpg"
                alt="bateria oeste"
              ></img>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Baterias;

import "../styles/Baterias.css";
import Footer from "./Footer";

const Baterias = () => {
  return (
    <>
      <div className="contenedor-padre-baterias">
        <div className="contenedor-imagenes-baterias">
          <div className="contenedor-imagen-bateria">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_970757-MLA46912230080_072021-O.jpg"
              alt="bateria moura"
            ></img>
          </div>
          <div className="contenedor-imagen-bateria">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_937085-MLA49808904437_042022-O.webp"
              alt="bateria williard"
            ></img>
          </div>
          <div className="contenedor-imagen-bateria">
            <img
              className="zoom-oeste"
              src="https://http2.mlstatic.com/D_684877-MLA44971954706_022021-O.jpg"
              alt="bateria oeste"
            ></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Baterias;

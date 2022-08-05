import "../styles/Servicios.css";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Servicios = () => {
  return (
    <div className="contenedor-padre-servicios color-fuente-oscuro">
      <div>
        <h2 className="fuente-titulo-principal">SERVICIOS</h2>
      </div>
      <div className="contenedor-servicios">
        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <BuildIcon></BuildIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              VENTA E INSTALACION
            </div>
          </div>
          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Brindamos Baterías para todo tipo de vehículo con un arranque fiable
            y seguro.
          </div>
        </div>

        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <Battery3BarIcon></Battery3BarIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              CONTROL DEL ESTADO Y CARGA
            </div>
          </div>

          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Contamos con personal capacitado para dejar en correcto
            funcionamiento el estado de su Bateria.
          </div>
        </div>
        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <DeleteForeverIcon></DeleteForeverIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              RECEPCION DE BATERIAS USADAS PARA SU RECICLADO
            </div>
          </div>

          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Cuando se realiza el cambio, nosotros nos quedamos con la bateria
            afectada.
          </div>
        </div>
        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <HomeIcon></HomeIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              CAMBIO A DOMICILIO
            </div>
          </div>
          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Nos acercamos a tu domicilio o donde estes para darte el mejor
            servicio. Trabajamos sabados, domingos y feriados inclusive, las 24
            horas.
          </div>
        </div>
        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <GroupIcon></GroupIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              ATENCION PERSONALIZADA
            </div>
          </div>
          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Te asesoramos con el modelo que necesitas en funcion al vehiculo que
            tengas, presupuestos y asesoramiento sin cargo.
          </div>
        </div>
        <div className="card-servicios">
          <div className="texto-centrado">
            <div>
              <ThumbUpAltIcon></ThumbUpAltIcon>
            </div>
            <div className="fuente-titulo-principal tamanio-titulo-principal">
              GARANTIA DE FABRICA DE 12 MESES
            </div>
          </div>
          <div className="fuente-texto-secundario tamanio-texto-secundario texto-start">
            Solo será reemplazada si dentro de la garantia se presenta una falla
            atribuible a fabricación defectuosa. Tendrá que presentar el talón
            entregado el dáa de su instalación.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;

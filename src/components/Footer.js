import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor-footer">
        <div className="color-fuente-general items-footer centrado">
          <WhatsAppIcon sx={{ fontSize: 35 }} />
          <p className="fuente-texto-secundario">WhatsApp</p>
        </div>
        <div className="color-fuente-general items-footer centrado">
          <EmailIcon sx={{ fontSize: 35 }} />
          <p className="fuente-texto-secundario">Mail</p>
        </div>
        <div className="color-fuente-general items-footer centrado">
          <FacebookIcon sx={{ fontSize: 35 }} />
          <p className="fuente-texto-secundario">Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

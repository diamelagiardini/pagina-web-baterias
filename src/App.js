import "./App.css";
import "./styles/Header.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Baterias from "./components/Baterias";
import Contacto from "./components/Contacto";
import ZonaCobertura from "./components/ZonaCobertura";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/baterias" element={<Baterias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/zona-cobertura" element={<ZonaCobertura />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { useState, useEffect } from "react";
import Preloader from "./componentes/Preloader/Preloader.jsx";
import Home from "./componentes/Home/Home.jsx";

// ✅ Lista de imágenes a precargar
const imagesToPreload = [
  "/img/carrousel/IMSA_Carrousel_1.webp",
  "/img/carrousel/IMSA_Carrousel_2.webp",
  "/img/carrousel/IMSA_Carrousel_3.webp",
  "/img/Formacion/salud.webp",
  "/img/Formacion/idiomas.webp",
  "/img/Formacion/belleza.webp",
  "/img/Formacion/diseño.webp",
  "/img/Formacion/tecnologia.webp",
  "/img/Formacion/tecnicos.webp",
];

function App() {
  const [imagesReady, setImagesReady] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [loading, setLoading] = useState(true);

  // ⏱️ Timer de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🖼️ Precarga de imágenes
  useEffect(() => {
    let loadedCount = 0;
    const total = imagesToPreload.length;

    const timeout = setTimeout(() => {
      // Fallback si tarda demasiado en cargar
      setImagesReady(true);
    }, 10000);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === total) {
          clearTimeout(timeout);
          setImagesReady(true);
        }
      };
    });

    return () => clearTimeout(timeout);
  }, []);

  // ✅ Mostrar contenido solo cuando se cumplan ambas condiciones
  useEffect(() => {
    if (imagesReady && timerDone) {
      setLoading(false);
    }
  }, [imagesReady, timerDone]);

  return (
    <>
      {loading ? <Preloader /> : <Home />}
    </>
  );
}

export default App;

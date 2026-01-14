// src/App.jsx

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
    // ⚙️ Estados de control del Preloader
    const [preloaderFinished, setPreloaderFinished] = useState(false);

    // 💡 Estados internos del Preloader
    const [imagesReady, setImagesReady] = useState(false);
    const [timerDone, setTimerDone] = useState(false);

    // --- Lógica del Preloader ---

    useEffect(() => {
        // ⏱️ Timer mínimo de 3 segundos
        const timer = setTimeout(() => {
            setTimerDone(true);
        }, 3000);

        // 🖼️ Precarga de imágenes
        let loadedCount = 0;
        const total = imagesToPreload.length;

        const fallbackTimeout = setTimeout(() => {
            setImagesReady(true);
        }, 10000);

        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === total) {
                    clearTimeout(fallbackTimeout);
                    setImagesReady(true);
                }
            };
        });

        return () => {
            clearTimeout(timer);
            clearTimeout(fallbackTimeout);
        };
    }, []);

    // --- Finalización del Preloader ---
    useEffect(() => {
        if (imagesReady && timerDone) {
            setPreloaderFinished(true);
        }
    }, [imagesReady, timerDone]);

    // --- Renderizado ---
    if (!preloaderFinished) {
        return <Preloader />;
    }

    return <Home />;
}

export default App;

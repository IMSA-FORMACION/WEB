// src/App.jsx

import { useState, useEffect } from "react";
import Preloader from "./componentes/Preloader/Preloader.jsx";
import Home from "./componentes/Home/Home.jsx";
import ComingSoonModal from "./componentes/ComingSoonPage/ComingSoonPage.jsx";

// ✅ Lista de imágenes a precargar (Se mantiene)
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
    // ⚙️ Estados de Control de Fases
    const [isModalOpen, setIsModalOpen] = useState(true); // FASE 1: Inicia abierto
    const [preloaderRunning, setPreloaderRunning] = useState(false); // FASE 2: Inicia detenido
    const [preloaderFinished, setPreloaderFinished] = useState(false); // FASE 3: Transición a Home

    // 💡 Estados internos del Preloader
    const [imagesReady, setImagesReady] = useState(false);
    const [timerDone, setTimerDone] = useState(false);

    // --- Lógica del Modal (FASE 1) ---

    // 1. Revisa LocalStorage al montar: si ya cerró el modal, salta a la FASE 2 (Preloader)
    useEffect(() => {
        const wasClosed = localStorage.getItem('comingSoonModalClosed');
        if (wasClosed === 'true') {
            setIsModalOpen(false);
            setPreloaderRunning(true); // Inicia el Preloader inmediatamente
        }
        // Si no se cerró antes, isModalOpen se mantiene en true, y esperamos a que el usuario lo cierre.
    }, []);

    // 2. Manejador de Cierre del Modal: Transiciona de FASE 1 a FASE 2
    const closeModal = () => {
        localStorage.setItem('comingSoonModalClosed', 'true');
        setIsModalOpen(false); // Cierra el modal
        setPreloaderRunning(true); // Inicia el proceso de precarga
    };


    // --- Lógica del Preloader (FASE 2) ---

    // 3. Ejecuta la lógica del Preloader solo cuando 'preloaderRunning' es true
    useEffect(() => {
        if (!preloaderRunning) return; // Detener hasta que el modal sea cerrado o saltado

        // ⏱️ Timer de 3 segundos
        const timer = setTimeout(() => {
            setTimerDone(true);
        }, 3000);

        // 🖼️ Precarga de imágenes
        let loadedCount = 0;
        const total = imagesToPreload.length;
        const timeout = setTimeout(() => {
            // Fallback si tarda demasiado
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

        // Limpieza de efectos
        return () => {
            clearTimeout(timer);
            clearTimeout(timeout);
        };
    }, [preloaderRunning]);


    // 4. Transición a Home: Mueve de FASE 2 a FASE 3
    useEffect(() => {
        if (preloaderRunning && imagesReady && timerDone) {
            setPreloaderFinished(true);
        }
    }, [preloaderRunning, imagesReady, timerDone]);

    // --- Renderizado Condicional por Fases ---

    // 1. Mostrar el Modal
    if (isModalOpen) {
        return <ComingSoonModal onClose={closeModal} />;
    }

    // 2. Mostrar el Preloader (Si está corriendo pero no ha terminado)
    if (preloaderRunning && !preloaderFinished) {
        return <Preloader />;
    }

    // 3. Mostrar la Home Page (Si el Preloader ha terminado)
    return <Home />;
}

export default App;
import { useState, useEffect, useRef } from 'react';
import style from './Carrousel.module.css';

// Importamos los nuevos componentes de Slide
import SlideInscripcion from './Slides/SlideInscripcion';
import SlideOportunidades from './Slides/SlideOportunidades';
import SlideAprendizaje from './Slides/SlideAprendizaje';
import SlideExperiencia from './Slides/SlideExperiencia';

export default function Carrousel() {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const intervaloRef = useRef(null);

  // Array de componentes
  const slides = [
    <SlideInscripcion key="0" />,
    <SlideOportunidades key="1" />,
    <SlideAprendizaje key="2" />,
    <SlideExperiencia key="3" />
  ];

  const iniciarAutoAvance = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current);
    intervaloRef.current = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    if (!pausado) iniciarAutoAvance();
    return () => clearInterval(intervaloRef.current);
  }, [pausado, indice]);

  const handleManualChange = (dir) => {
    setIndice((prev) => (prev + dir + slides.length) % slides.length);
    setPausado(true);
    clearInterval(intervaloRef.current);
    setTimeout(() => setPausado(false), 15000);
  };

  return (
    <div className={style.carrusel}>
      {/* Renderiza el componente actual según el índice */}
      <div className={style.slideWrapper}>
        {slides[indice]}
      </div>

      {/* Controles */}
      <div className={style.controles}>
        <button onClick={() => handleManualChange(-1)} className={style.controlBtn}>◀</button>
        <button onClick={() => handleManualChange(1)} className={style.controlBtn}>▶</button>
      </div>
    </div>
  );
}
import { useEffect, useRef } from "react";
import style from "./Empresas.module.css";

export default function Empresas() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const positionRef = useRef(0);
  const isPaused = useRef(false);
  const speed = 100; // px por segundo
  const gap = 80; // gap entre logos

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let trackWidth = track.scrollWidth / 2;

    function step(timestamp) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused.current) {
        const movement = (speed * delta) / 1000;
        positionRef.current -= movement;

        const firstLogo = track.children[0];
        if (!firstLogo) return;

        const firstLogoWidth = firstLogo.offsetWidth + gap;

        // Loop infinito: cuando el primer logo sale completamente
        if (Math.abs(positionRef.current) >= firstLogoWidth) {
          positionRef.current += firstLogoWidth;
          track.appendChild(firstLogo);
        }

        track.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(step);
    }

    // Esperar que todas las imágenes carguen
    const images = Array.from(track.querySelectorAll("img"));
    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) loaded++;
      else img.onload = () => {
        loaded++;
        if (loaded === images.length) animationRef.current = requestAnimationFrame(step);
      };
    });
    if (loaded === images.length) animationRef.current = requestAnimationFrame(step);

    // Recalcular posición en resize
    const handleResize = () => {
      positionRef.current = 0;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={style.instituciones}>
      <h3 className={style.institucionesTitulo}>
        Empresas que confían en nosotros
      </h3>

      <div
        className={style.carousel}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        <div className={style.track} ref={trackRef}>
          <img src="/img/empresas/AACI.png" alt="AACI" />
          <img src="/img/empresas/cambridge.png" alt="Cambridge English" />
          <img src="/img/empresas/camara-argentina.png" alt="Cámara Argentina" />
          <img src="/img/empresas/CARAA.png" alt="CARAA" />

          {/* Duplicados para loop infinito */}
          <img src="/img/empresas/AACI.png" alt="AACI" />
          <img src="/img/empresas/cambridge.png" alt="Cambridge English" />
          <img src="/img/empresas/camara-argentina.png" alt="Cámara Argentina" />
          <img src="/img/empresas/CARAA.png" alt="CARAA" />
        </div>
      </div>
    </section>
  );
}

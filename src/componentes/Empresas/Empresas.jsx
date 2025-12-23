import { useEffect, useRef } from "react";
import style from "./Empresas.module.css";

export default function Empresas() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 0.5;
  const positionRef = useRef(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let trackWidth = 0;

    function startAnimation() {
      const containerWidth = track.parentElement.offsetWidth;
      trackWidth = track.scrollWidth / 2;
      positionRef.current = (containerWidth - trackWidth) / 2;

      function step() {
        if (!isPaused.current) {
          positionRef.current -= speed;

          const firstLogo = track.children[0];
          if (!firstLogo) return;
          const firstLogoWidth = firstLogo.offsetWidth + 80;

          if (Math.abs(positionRef.current) >= firstLogoWidth) {
            positionRef.current += firstLogoWidth;
            track.appendChild(firstLogo);
          }

          track.style.transform = `translateX(${positionRef.current}px)`;
        }
        animationRef.current = requestAnimationFrame(step);
      }

      animationRef.current = requestAnimationFrame(step);
    }

    // Esperar que todas las imágenes estén cargadas
    const images = Array.from(track.querySelectorAll("img"));
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) startAnimation();
        };
      }
    });
    if (loadedCount === images.length) startAnimation();

    // Recalcular en resize (mobile / responsive)
    const handleResize = () => {
      const containerWidth = track.parentElement.offsetWidth;
      trackWidth = track.scrollWidth / 2;
      positionRef.current = (containerWidth - trackWidth) / 2;
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

          {/* Duplicados */}
          <img src="/img/empresas/AACI.png" alt="AACI" />
          <img src="/img/empresas/cambridge.png" alt="Cambridge English" />
          <img src="/img/empresas/camara-argentina.png" alt="Cámara Argentina" />
          <img src="/img/empresas/CARAA.png" alt="CARAA" />
        </div>
      </div>
    </section>
  );
}

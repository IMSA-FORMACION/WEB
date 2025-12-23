import { useEffect, useRef } from "react";
import style from "./Empresas.module.css";

export default function Empresas() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 0.5; // px/frame
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Centrar al inicio
    const containerWidth = track.parentElement.offsetWidth;
    const trackWidth = track.scrollWidth / 2; // porque duplicamos los logos
    positionRef.current = (containerWidth - trackWidth) / 2;

    function step() {
      positionRef.current -= speed;

      const firstLogo = track.children[0];
      const firstLogoWidth = firstLogo.offsetWidth + 80; // 80 = gap

      // Cuando el primer logo salió totalmente a la izquierda
      if (Math.abs(positionRef.current) >= firstLogoWidth) {
        positionRef.current += firstLogoWidth;
        track.appendChild(firstLogo);
      }

      track.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(step);
    }

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className={style.instituciones}>
      <h3 className={style.institucionesTitulo}>
        EMPRESAS QUE CONFÍAN EN NOSOTROS
      </h3>

      <div className={style.carousel}>
        <div className={style.track} ref={trackRef}>
          <img src="/img/empresas/AACI.png" alt="AACI" />
          <img src="/img/empresas/cambridge.png" alt="Cambridge English" />
          <img src="/img/empresas/camara-argentina.png" alt="Cámara Argentina" />
          <img src="/img/empresas/CARAA.png" alt="CARAA" />

          {/* Duplicados para loop */}
          <img src="/img/empresas/AACI.png" alt="AACI" />
          <img src="/img/empresas/cambridge.png" alt="Cambridge English" />
          <img src="/img/empresas/camara-argentina.png" alt="Cámara Argentina" />
          <img src="/img/empresas/CARAA.png" alt="CARAA" />
        </div>
      </div>
    </section>
  );
}

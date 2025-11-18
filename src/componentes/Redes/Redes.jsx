import { useEffect, useRef, useState } from 'react';
import style from './Redes.module.css';


export default function Redes() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // <-- nuevo estado

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo animar si todavía no ocurrió
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Marcar como animado
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Escuchar por si cambia

  return (
    <section ref={sectionRef} className={style.banner}>
      <div className={style.contenido}>
        <h2 className={style.titulo}>Seguinos en las redes</h2>
        <p className={style.subtitulo}>Para estar al tanto de todas nuestras novedades</p>
        <div className={style.iconos}>
          <img
            src='/img/redes/Facebook.png'
            alt="Facebook"
            className={`${style.icono} ${hasAnimated ? style.animate : ''} ${style.delay1}`}
          />
          <img
            src='/img/redes/Instagram.png'
            alt="Instagram"
            className={`${style.icono} ${hasAnimated ? style.animate : ''} ${style.delay2}`}
          />
        </div>
      </div>
    </section>
  );
}

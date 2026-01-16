import { useEffect, useRef, useState } from 'react';
import style from './Redes.module.css';

export default function Redes() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className={style.banner}>
      <div className={style.contenido}>
        <h2 className={style.titulo}>Seguinos en las redes</h2>
        <p className={style.subtitulo}>Para estar al tanto de todas nuestras novedades</p>
        
        <div className={style.iconos}>
          {/* Enlace Facebook */}
          <a 
             href="https://www.facebook.com/people/IMSA/61585515595551/" 
    target="_blank" 
    rel="noopener noreferrer"
          >
            <img
              src='/img/redes/Facebook.png'
              alt="Facebook"
              className={`${style.icono} ${hasAnimated ? style.animate : ''} ${style.delay1}`}
            />
          </a>

          {/* Enlace Instagram */}
          <a 
            href="https://www.instagram.com/imsa.formacion" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src='/img/redes/Instagram.png'
              alt="Instagram"
              className={`${style.icono} ${hasAnimated ? style.animate : ''} ${style.delay2}`}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
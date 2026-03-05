import React from 'react';
import style from './SlidePromo.module.css';

const SlidePromo = () => {
  const mensaje = encodeURIComponent("Hola! Quiero más información sobre la promo 2x1");
  const whatsappUrl = `https://wa.me/5491159489408?text=${mensaje}`;

  return (
    <div className={style.slide}>
      {/* Triángulos decorativos más presentes */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`${style.triangulo} ${style[`t${i + 1}`]}`}></div>
      ))}

      <div className={style.contenido}>
        <h3 className={style.promoLabel}>- PROMO -</h3>
        <h2 className={style.granTitulo}>2x1</h2>
        
        <div className={style.cintaContenedor}>
          <div className={style.cinta}>
            <p>y otros descuentos <br /> exclusivos para vos</p>
          </div>
        </div>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={style.botonContactanos}
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default SlidePromo;
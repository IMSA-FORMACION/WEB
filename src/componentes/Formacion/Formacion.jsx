import React from 'react';
import { Link } from "react-router-dom";
import styles from './Formacion.module.css';

const areas = [
  { title: 'SALUD', url_img: '/img/Formacion/salud.webp' },
  { title: 'IDIOMAS', url_img: '/img/Formacion/idiomas.webp' },
  { title: 'BELLEZA', url_img: '/img/Formacion/belleza.webp' },
  { title: 'DISEÑO', url_img: '/img/Formacion/diseño.webp' },
  { title: 'TECNOLOGÍA', url_img: '/img/Formacion/tecnologia.webp' },
  { title: 'TÉCNICOS', url_img: '/img/Formacion/tecnicos.webp' },
   {title:'DESARROLLO  ', url_img:'/img/Formacion/personal.jpg'},
  {title:'ADMINISTRACIÓN', url_img:'/img/Formacion/administracion.jpg'},
  {title:'INTERNACIONAL', url_img:'/img/Formacion/internacional1.jpg'},
];

function Formacion() {
  return (
    <>
      <h2 className={styles.title2}>ÁREA DE FORMACIÓN</h2>
      <div className={styles.container}>
        {areas.map((area) => (
          <div key={area.title} className={styles.card}>
            <img
              src={area.url_img}
              alt={area.title}
              className={styles.image}
              loading="eager"
            />
            <div className={styles.content}>
              <p className={styles.title}>{area.title}</p>

              {/* Link que lleva al componente de cursos con filtro */}
              <Link
                to="/cursos"
                state={{ filtroArea: area.title }}
                className={styles.button}
              >
                Ver cursos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(Formacion);


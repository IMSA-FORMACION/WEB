// src/components/Internacional/Internacional.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Internacional.module.css'; // Asegúrate de crear este archivo CSS Module

function Internacional() {
  return (
    <div className={styles.internationalSection}>
      <div className={styles.internationalCardWrapper}>
        <div className={styles.internationalCard}>
          
          {/* Contenedor del Texto (columna izquierda) */}
          <div className={styles.textContent}>
            <p className={styles.newTag}>¡NUEVO!</p>
            <h2 className={styles.titlePart1}>Cursos con</h2>
            <h2 className={styles.titlePart2}>Certificación</h2>
            <h2 className={styles.titlePart2}>Internacional</h2>
            <p className={styles.description}>
              Sumérgete en programas de vanguardia diseñados para el mercado global. Obtén titulaciones reconocidas internacionalmente y eleva tu perfil profesional a nuevas alturas. Conoce las metodologías más innovadoras y prepárate para un mundo sin fronteras.
            </p>
            <Link
              to="/cursos" // Ajusta la ruta a donde quieras dirigir los cursos internacionales
              state={{ filtroArea: 'INTERNACIONAL' }}
              className={styles.actionButton}
            >
              Explorar Cursos Internacionales
            </Link>
          </div>
          
          {/* Contenedor de la Imagen (columna derecha con difuminado) */}
          <div className={styles.imageWrapper}>
            <img 
              src="/img/Formacion/internacional.jpg" // Ruta de tu imagen del globo terráqueo
              alt="Globo terráqueo sobre libro, representando cursos internacionales" 
              className={styles.cardImage} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default React.memo(Internacional);
import styles from "./Cursos.module.css";
import cursosData from "../../data/cursos.json"; 
import { Link } from "react-router-dom"; 

const LOGO_URL = "/logo_imsa_blanco.png"; 

const Cursos = () => {
  return (
    <div className={styles.cursosContainer}>
      <h2 className={styles.cursosTitle}>CURSOS DESTACADOS</h2>

      <div className={styles.cursosGrid}>
        {cursosData
          .filter((curso) => curso.destacado) 
          .map((curso) => {
            // Evaluamos la condición de vacantes para cada curso destacado
            const sinVacantes = curso.vacantes === false || String(curso.vacantes) === "false";

            return (
              <div key={curso.id} className={styles.cursoCard}>
                <div className={styles.cursoImgWrapper}>
                  <img
                    src={LOGO_URL}
                    alt="Logo IMSA"
                    className={styles.cursoLogoOverlay}
                  />
                  
                  {/* STICKER EN UNA SOLA LÍNEA */}
                  {sinVacantes && (
                    <div className={styles.stickerProximamente}>
                      PRÓXIMAMENTE - LISTA DE ESPERA ABIERTA
                    </div>
                  )}

                  <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className={styles.cursoImg}
                  />
                </div>
                <h3>{curso.titulo}</h3>
                <p>{curso.descripcion_corta}</p>
                <Link to={`/cursos/${curso.id}`} className={styles.ingresar}>Ver más</Link>
              </div>
            );
          })}
      </div>

      <div className={styles.verTodos}>
        <Link to="/cursos" className={`${styles.ingresar} ${styles.verTodosBtn}`}>
          Ver todos los cursos 
        </Link>
      </div>
    </div>
  );
};

export default Cursos;
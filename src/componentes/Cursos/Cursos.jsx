import styles from "./Cursos.module.css";
import cursosData from "../../data/cursos.json"; // ✅ import del JSON
import { Link } from "react-router-dom"; // Para navegar luego a /cursos o detalle

const LOGO_URL = "/logo_imsa_blanco.png"; // Ruta del logo

const Cursos = () => {
  return (
    <div className={styles.cursosContainer}>
      <h2 className={styles.cursosTitle}>CURSOS DESTACADOS</h2>

      <div className={styles.cursosGrid}>
        {cursosData
          .filter((curso) => curso.destacado) // ✅ Mostrar solo los destacados en home
          .map((curso) => (
            <div key={curso.id} className={styles.cursoCard}>
              <div className={styles.cursoImgWrapper}>
                <img
                  src={LOGO_URL}
                  alt="Logo IMSA"
                  className={styles.cursoLogoOverlay}
                />
                <span className={styles.cursoAsincronicoTag}>
                  {curso.modalidad.toUpperCase()}
                </span>
                <img
                  src={curso.imagen}
                  alt={curso.titulo}
                  className={styles.cursoImg}
                />
              </div>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <Link to={`/cursos/${curso.id}`} className={styles.ingresar}>Ver más</Link>
            </div>
          ))}
      </div>

      <div className={styles.verTodos}>
        <Link to="/cursos" className={`${styles.ingresar} ${styles.verTodosBtn}`}>
          Ver todos los cursos de formación
        </Link>
      </div>
    </div>
  );
};

export default Cursos;

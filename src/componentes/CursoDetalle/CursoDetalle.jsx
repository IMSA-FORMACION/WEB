import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./CursoDetalle.module.css";

const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursoDetalle() {
  const { id } = useParams();
  const curso = cursosData.find((c) => String(c.id) === id);

  // Scroll al top al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!curso) {
    return (
      <div>
        <Nav />
        <div className={styles.noEncontrado}>
          <h2>Curso no encontrado</h2>
          <Link to="/cursos" className={styles.volverBtn}>
            Volver a cursos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Extraemos detalle para usarlo fácil
  const { detalle } = curso;

  return (
    <div>
      <Nav />
      <div className={styles.detalleContainer}>
        <div className={styles.detalleCard}>
          
          <div className={styles.imagenWrapper}>
            <img
              src={LOGO_URL}
              alt="Logo IMSA"
              className={styles.cursoLogoOverlay}
            />
            <span className={styles.cursoModalidadTag}>
              {curso.modalidad.toUpperCase()}
            </span>
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className={styles.imagenCurso}
            />
          </div>

          <div className={styles.detalleContenido}>
            <h2>{curso.titulo}</h2>
            
            {/* Info Extra Original */}
            <div className={styles.infoExtra}>
              <p>
                <strong>Área:</strong> {curso.area}
              </p>
              <p>
                <strong>Duración:</strong> {curso.duracion}
              </p>
            </div>

            <p className={styles.descripcion}>{curso.descripcion}</p>

            {/* === AQUI INICIA LA NUEVA SECCION DE DETALLES === */}
            {/* Usamos un contenedor para alinear las listas a la izquierda pero centradas en la card */}
            <div className={styles.contenedorListas}>
              
              {/* 1. Metodología (Solo si existe) */}
              {detalle?.metodologia && (
                <div className={styles.cajaLista}>
                  <span className={styles.subtituloLista}>Metodología</span>
                  <ul className={styles.listaItems}>
                    <li>{detalle.metodologia}</li>
                  </ul>
                </div>
              )}

              {/* 2. Temario */}
              {detalle?.temario && (
                <div className={styles.cajaLista}>
                  <span className={styles.subtituloLista}>Temario</span>
                  <ul className={styles.listaItems}>
                    {detalle.temario.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Salida Laboral */}
              {detalle?.salida_laboral && (
                <div className={styles.cajaLista}>
                  <span className={styles.subtituloLista}>Salida Laboral</span>
                  <ul className={styles.listaItems}>
                    {detalle.salida_laboral.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* === FIN DE LA NUEVA SECCION === */}

            <Link to="/cursos" className={styles.volverBtn}>
              ← Volver a cursos
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
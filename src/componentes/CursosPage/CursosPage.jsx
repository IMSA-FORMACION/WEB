import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import styles from "./CursosPage.module.css";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursosPage() {
  const location = useLocation();

  // Si viene un filtroArea desde Formacion, lo usamos como inicial
  const [filtroArea, setFiltroArea] = useState(location.state?.filtroArea || "TODOS");
  const [filtroModalidad, setFiltroModalidad] = useState("TODOS");

  // Generar opciones automáticamente
  const areas = ["TODOS", ...new Set(cursosData.map((c) => c.area))];
  const modalidades = ["TODOS", ...new Set(cursosData.map((c) => c.modalidad.toUpperCase()))];

  // Filtrado
  const cursosFiltrados = cursosData.filter((curso) => {
    const coincideArea = filtroArea === "TODOS" || curso.area === filtroArea;
    const coincideModalidad =
      filtroModalidad === "TODOS" ||
      curso.modalidad.toUpperCase() === filtroModalidad;
    return coincideArea && coincideModalidad;
  });

  // Scroll al top al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Nav/>

      <div className={styles.cursosContainer}>
        <h2 className={styles.cursosTitle}>CURSOS DISPONIBLES</h2>

        {/* FILTROS CON ETIQUETAS Y NUEVO ESTILO */}
        <div className={styles.filtros}>
          {/* Filtro por Área */}
          <div className={styles.filtroGroup}>
            <label htmlFor="filtroArea" className={styles.filtroLabel}>
              Área
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="filtroArea" 
                value={filtroArea}
                onChange={(e) => setFiltroArea(e.target.value)}
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filtro por Modalidad */}
          <div className={styles.filtroGroup}>
            <label htmlFor="filtroModalidad" className={styles.filtroLabel}>
              Modalidad
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="filtroModalidad" 
                value={filtroModalidad}
                onChange={(e) => setFiltroModalidad(e.target.value)}
              >
                {modalidades.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* GRID DE CURSOS */}
        <div className={styles.cursosGrid}>
          {cursosFiltrados.map((curso) => (
            <div key={curso.id} className={styles.cursoCard}>
              <div className={styles.cursoImgWrapper}>
                <img src={LOGO_URL} alt="Logo IMSA" className={styles.cursoLogoOverlay} />
                <span className={styles.cursoAsincronicoTag}>
                  {curso.modalidad.toUpperCase()}
                </span>
                <img src={curso.imagen} alt={curso.titulo} className={styles.cursoImg} />
              </div>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <Link to={`/cursos/${curso.id}`} className={styles.ingresar}>
                Ver más
              </Link>
            </div>
          ))}
          {cursosFiltrados.length === 0 && <p>No se encontraron cursos.</p>}
        </div>
      </div>

      <Footer/>

      <a
        href="https://wa.me/5491159489408"
        className={styles.wafloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
 
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./CursoDetalle.module.css";

// ICONOS
import { MdOutlineLaptop, MdGroupAdd, MdRecordVoiceOver, MdOutlineAccessTime } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi"; 

const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursoDetalle() {
  const { id } = useParams();
  const curso = cursosData.find((c) => String(c.id) === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const generateWhatsAppLink = (tituloCurso, esListaEspera = false) => {
    const telefono = "+5491159489408";
    const mensaje = esListaEspera 
      ? `¡Hola! Me gustaría anotarme en la lista de espera para el curso: ${tituloCurso}. Por favor, avísenme cuando abran nuevas vacantes.`
      : `¡Hola! Quiero consultar por el curso: ${tituloCurso}.`;
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  };

  if (!curso) {
    return (
      <div>
        <Nav />
        <div className={styles.noEncontrado}>
          <h2>Curso no encontrado</h2>
          <Link to="/cursos" className={styles.volverBtn}>Volver a cursos</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { detalle, modalidad, duracion, vacantes } = curso;
  // Definimos la condición de "Sin Vacantes"
  const sinVacantes = vacantes === false || String(vacantes) === "false";

  return (
    <div>
      <Nav /> 
      <div className={styles.detalleContainer}>
        <div className={styles.detalleCard}>
          
       

          <div className={styles.imagenWrapper}>
            <img src={LOGO_URL} alt="Logo IMSA" className={styles.cursoLogoOverlay} />  
            <img src={curso.imagen} alt={curso.titulo} className={styles.imagenCurso} />

               {/* BANNER SUPERIOR */}
          {sinVacantes && (
            <div className={styles.stickerProximamente}>
              PRÓXIMAMENTE - LISTA DE ESPERA ABIERTA
            </div>
          )}
          </div>

          <h2 className={styles.titulo}>{curso.titulo}</h2>

          <div className={styles.detalleContenido}>
            <div className={styles.cajaLista} style={{ maxWidth: 700 }}>
              <div className={styles.infoCabecera}>
                <div className={styles.datoDinamico}>
                
                  <h3>Duración: <span>{duracion || "Consultar"}</span></h3>
                </div>
                <div className={styles.modalidad}>
                  <h3>Modalidad: <span>{modalidad}</span></h3>
                </div>
              </div>

              <div className={styles.miniCardsContainer}>
                <div className={styles.miniCard}><IoDocumentText className={styles.miniCardIcon}/><span>Recursos Multimedia</span></div>
                <div className={styles.miniCard}><MdGroupAdd className={styles.miniCardIcon}/><span>En vivo o grabaciones</span></div>
                <div className={styles.miniCard}><MdOutlineLaptop className={styles.miniCardIcon}/><span>Campus virtual</span></div>
                <div className={styles.miniCard}><MdRecordVoiceOver className={styles.miniCardIcon}/><span>Tutores</span></div>
              </div>

              <div className={styles.objetivo}>
                <h3>Objetivo General:</h3>
                <p className={styles.descripcion}>{curso.descripcion}</p>
              </div>
            </div>

            <div className={styles.contenedorListas}>
              {detalle?.temario && (
                <div className={styles.cajaLista}>
                  <span className={styles.subtituloLista}>Herramientas que incorporaras</span>
                  <ul className={styles.listaItems}>
                    {detalle.temario.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
              {detalle?.salida_laboral && (
                <div className={styles.cajaLista}>
                  <span className={styles.subtituloLista}>Salida Laboral</span>
                  <ul className={styles.listaItems}>
                    {detalle.salida_laboral.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>

            {/* 🎯 SECCIÓN DE BOTONES DINÁMICA */}
            <div className={styles.botonesFinales}>
              {sinVacantes ? (
                /* BOTÓN DE AVISO (Solo si no hay vacantes) */
                <a 
                  href={generateWhatsAppLink(curso.titulo, true)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.avisoBtnFinal}
                >
                  <HiOutlineBell className={styles.campanaIcon} /> Quiero que me avisen
                </a>
              ) : (
                /* BOTÓN DE CONSULTA (Solo si hay vacantes) */
                <a
                  href={generateWhatsAppLink(curso.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consultarBtn}
                >
                  Consultar por este curso
                </a>
              )}

              <Link to="/cursos" className={styles.volverBtn}>
                ← Volver a cursos
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
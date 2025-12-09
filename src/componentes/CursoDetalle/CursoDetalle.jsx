import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./CursoDetalle.module.css";
import { MdOutlineLaptop } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursoDetalle() {
  const { id } = useParams();
  const curso = cursosData.find((c) => String(c.id) === id);

  // Scroll al top al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 🎯 FUNCIÓN PARA GENERAR EL ENLACE DE WHATSAPP
  const generateWhatsAppLink = (tituloCurso) => {

    const telefono = "+5491159489408";
    // Mensaje prellenado
    const mensaje = `¡Hola! Quiero consultar por el curso: ${tituloCurso}.`;
    const encodedMessage = encodeURIComponent(mensaje);

    return `https://wa.me/${telefono}?text=${encodedMessage}`;
  };

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
  const { detalle , modalidad} = curso;

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
          
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className={styles.imagenCurso}
            />
          </div>
 <h2 className={styles.titulo}>{curso.titulo}</h2>
          <div className={styles.detalleContenido}>
        

      
                      {/** Acá van las mini cards*/}
<div className={styles.modalidad}>
  <h3>Modalidad: <span>{modalidad}</span></h3>
</div>
<div className={styles.miniCardsContainer}>
  
<div className={styles.miniCard}>
  <MdGroupAdd className={styles.miniCardIcon}/>
  <span>Encuentros en vivo</span>
</div>
  <div className={styles.miniCard}>
    <MdOutlineLaptop className={styles.miniCardIcon} />
    <span>Intercambio en campus virtual</span>
  </div>


</div>
       <div className={styles.objetivo}>
             <h3>Objetivo General:</h3>
            <p className={styles.descripcion}>{curso.descripcion}</p>
       </div>


            {/* === AQUI INICIA LA NUEVA SECCION DE DETALLES (Listas) === */}

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

            {/* 🎯 CONTENEDOR DE BOTONES (posicionado al final) */}
            <div className={styles.botonesFinales}>
              {/* 🟢 BOTÓN PRINCIPAL (CTA de marca) */}
              <a
                href={generateWhatsAppLink(curso.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.consultarBtn}
              >
                Consultar por este curso
              </a>

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
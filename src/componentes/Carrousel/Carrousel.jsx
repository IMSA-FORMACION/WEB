import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Carrousel.module.css';

export default function Carrousel() {
  const slides = [
    {
      imagen: "/img/carrousel/IMSA_Carrousel_0.webp",
      titulo: "¡COMENZAMOS EN MARZO!",
      parrafos: ["Inscribite hoy y transformá tu futuro profesional con IMSA"],
      boton: "Inscribirse",
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_1.webp",
      titulo: "Tus oportunidades no tienen límites",
      parrafos: [
        "Poder estudiar desde cualquier lugar del mundo y comenzar tu camino profesional.",
        "Online, a tu ritmo y con certificación.",
      ],
      boton: "Ver cursos de formación",
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_2.webp",
      titulo: "Aprendé desde donde estés",
      parrafos: [
        "Nuestros cursos están creados con una mirada práctica y humana.",
        "Porque aprender es más que estudiar: es crecer, elegir y transformar",
      ],
      boton: "Conocenos más",
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_3.webp",
      titulo: "Una experiencia de aprendizaje que te acompaña",
      parrafos: [
        "Nuestros cursos organizados por módulos, con calendario de actividades, contenidos actualizados y espacios de consulta directa.",
        "Estudiás con libertad, pero siempre acompañado.",
      ],
      boton: "Ver cursos de formación",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const intervaloRef = useRef(null);
  const navigate = useNavigate();

  const iniciarAutoAvance = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current);
    intervaloRef.current = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    if (!pausado) iniciarAutoAvance();
    return () => clearInterval(intervaloRef.current);
  }, [pausado]);

  const handleClickImagen = () => {
    setPausado(true);
    clearInterval(intervaloRef.current);
    setTimeout(() => setPausado(false), 15000);
  };

  const handleManualChange = (dir) => {
    setIndice((prev) => (prev + dir + slides.length) % slides.length);
    setPausado(true);
    clearInterval(intervaloRef.current);
    setTimeout(() => setPausado(false), 15000);
  };

  const handleBotonClick = (textoBoton) => {
    if (textoBoton === "Ver cursos de formación") {
      navigate("/cursos");
    } else if (textoBoton === "Conocenos más") {
      const elemento = document.getElementById("nosotros");
      if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actual = slides[indice];

  return (
    <div className={style.carrusel}>
      <img
        src={actual.imagen}
        alt={`Slide ${indice + 1}`}
        className={style.img}
        loading="eager"
        onClick={handleClickImagen}
      />

      <div className={style.texto}>
        <h1>{actual.titulo}</h1>

        {actual.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

       {/* ✅ BOTONES */}
{indice === 0 ? (
  <div className={style.botonesInscripcion}>
    <a
      href="mailto:info@imsaformacion.com"
      className={style.boton}
    >
      Inscribirme por correo
    </a>

    <a
      href="https://wa.me/5491159489408"
      target="_blank"
      rel="noopener noreferrer"
      className={style.boton}
    >
      Inscribirme por WhatsApp
    </a>
  </div>
) : (
  <button
    className={style.boton}
    onClick={() => handleBotonClick(actual.boton)}
    type="button"
  >
    {actual.boton}
  </button>
)}

      </div>

      {/* Controles */}
      <div className={style.controles}>
        <button onClick={() => handleManualChange(-1)} className={style.controlBtn}>◀</button>
        <button onClick={() => handleManualChange(1)} className={style.controlBtn}>▶</button>
      </div>
    </div>
  );
}

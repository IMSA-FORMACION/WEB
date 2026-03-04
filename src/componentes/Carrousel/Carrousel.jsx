import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Carrousel.module.css';

export default function Carrousel() {
  const slides = [
    {
      imagen: "/img/carrousel/IMSA_Carrousel_0.webp",
      titulo: "¡COMENZAMOS EN MARZO!",
      parrafos: [
        "Inscribite hoy y transformá tu futuro profesional con IMSA"
      ],
      botones: [
        {
          texto: "Inscribirme por correo",
          tipo: "mail",
          destino: "info@imsaformacion.com"
        },
        {
          texto: "Inscribirme por WhatsApp",
          tipo: "externo",
          destino: "https://wa.me/5491159489408"
        }
      ]
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_1.webp",
      titulo: "Tus oportunidades no tienen límites",
      parrafos: [
        "Poder estudiar desde cualquier lugar del mundo y comenzar tu camino profesional.",
        "Online, a tu ritmo y con certificación.",
      ],
      botones: [
        {
          texto: "Ver cursos de formación",
          tipo: "ruta",
          destino: "/cursos"
        }
      ]
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_2.webp",
      titulo: "Aprendé desde donde estés",
      parrafos: [
        "Nuestros cursos están creados con una mirada práctica y humana.",
        "Porque aprender es más que estudiar: es crecer, elegir y transformar"
      ],
      botones: [
        {
          texto: "Conocenos más",
          tipo: "scroll",
          destino: "nosotros"
        }
      ]
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_3.webp",
      titulo: "Una experiencia de aprendizaje que te acompaña",
      parrafos: [
        "Nuestros cursos organizados por módulos, con calendario de actividades, contenidos actualizados y espacios de consulta directa.",
        "Estudiás con libertad, pero siempre acompañado."
      ],
      botones: [
        {
          texto: "Ver cursos de formación",
          tipo: "ruta",
          destino: "/cursos"
        }
      ]
    }
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

  const handleBotonClick = (boton) => {
    if (!boton) return;

    if (boton.tipo === "ruta") {
      navigate(boton.destino);
    }

    if (boton.tipo === "scroll") {
      const elemento = document.getElementById(boton.destino);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (boton.tipo === "externo") {
      window.open(boton.destino, "_blank");
    }

    if (boton.tipo === "mail") {
      window.location.href = `mailto:${boton.destino}`;
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
        <div className={style.botonesInscripcion}>
          {actual.botones?.map((boton, i) => (
            <button
              key={i}
              className={style.boton}
              onClick={() => handleBotonClick(boton)}
              type="button"
            >
              {boton.texto}
            </button>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className={style.controles}>
        <button
          onClick={() => handleManualChange(-1)}
          className={style.controlBtn}
        >
          ◀
        </button>
        <button
          onClick={() => handleManualChange(1)}
          className={style.controlBtn}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
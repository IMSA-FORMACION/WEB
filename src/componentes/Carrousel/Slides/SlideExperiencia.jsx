import { useNavigate } from 'react-router-dom';
import style from './SlideExperiencia.module.css';

export default function SlideExperiencia() {
  const navigate = useNavigate();

  const handleVerCursos = () => {
    navigate('/cursos');
  };

  return (
    <div className={style.slide}>
      {/* Fondo */}
      <img 
        src="/img/carrousel/IMSA_Carrousel_3.webp" 
        alt="Experiencia de aprendizaje" 
        className={style.img}
      />

      {/* Contenido */}
      <div className={style.texto}>
        <h1 className={style.titulo}>Una experiencia de aprendizaje que te acompaña</h1>
        
        <div className={style.cuerpo}>
          <p>
            Nuestros cursos organizados por módulos, con calendario de actividades, 
            contenidos actualizados y espacios de consulta directa.
          </p>
          <p className={style.destacado}>
            Estudiás con libertad, pero siempre acompañado.
          </p>
        </div>

        <button 
          className={style.boton} 
          onClick={handleVerCursos}
          type="button"
        >
          Ver cursos de formación
        </button>
      </div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';
import style from './SlideOportunidades.module.css';

export default function SlideOportunidades() {
  const navigate = useNavigate();

  const handleVerCursos = () => {
    navigate('/cursos');
  };

  return (
    <div className={style.slide}>
      {/* Fondo */}
      <img 
        src="/img/carrousel/IMSA_Carrousel_1.webp" 
        alt="Tus oportunidades" 
        className={style.img}
      />

      {/* Contenido */}
      <div className={style.texto}>
        <h1 className={style.titulo}>Tus oportunidades no tienen límites</h1>
        
        <div className={style.cuerpo}>
          <p>Poder estudiar desde cualquier lugar del mundo y comenzar tu camino profesional.</p>
          <p>Online, a tu ritmo y con certificación.</p>
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
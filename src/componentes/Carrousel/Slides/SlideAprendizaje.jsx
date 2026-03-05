import style from './SlideAprendizaje.module.css';

export default function SlideAprendizaje() {
  
  const handleScroll = () => {
    // Busca el elemento con ID "nosotros" en el DOM
    const elemento = document.getElementById("nosotros");
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("No se encontró el elemento con ID 'nosotros'");
    }
  };

  return (
    <div className={style.slide}>
      {/* Fondo */}
      <img 
        src="/img/carrousel/IMSA_Carrousel_2.webp" 
        alt="Aprendé desde donde estés" 
        className={style.img}
      />

      {/* Contenido */}
      <div className={style.texto}>
        <h1 className={style.titulo}>Aprendé desde donde estés</h1>
        
        <div className={style.cuerpo}>
          <p>Nuestros cursos están creados con una mirada práctica y humana.</p>
          <p>Porque aprender es más que estudiar: es crecer, elegir y transformar.</p>
        </div>

        <button 
          className={style.botonScroll} 
          onClick={handleScroll}
          type="button"
        >
          Conocenos más
        </button>
      </div>
    </div>
  );
}
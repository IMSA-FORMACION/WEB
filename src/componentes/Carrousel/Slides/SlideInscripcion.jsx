import style from './SlideInscripcion.module.css';

export default function SlideInscripcion() {
  
  const handleMailClick = () => {
    window.location.href = "mailto:info@imsaformacion.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491159489408", "_blank");
  };

  return (
    <div className={style.slide}>
      {/* Imagen de fondo */}
      <img 
        src="/img/carrousel/IMSA_Carrousel_0.webp" 
        alt="Comenzamos en Marzo" 
        className={style.img}
      />

      {/* Contenido textual */}
      <div className={style.texto}>
        <h1 className={style.titulo}>¡ARRANCAMOS CURSOS TODOS LOS MESES!</h1>
        <p className={style.parrafo}>
         Siempre estás a tiempo de sumarte, incluso a los que ya comenzaron.
        </p>

        {/* Grupo de botones específico de este slide */}
        <div className={style.botonesInscripcion}>
          <button 
            className={style.boton} 
            onClick={handleMailClick}
            type="button"
          >
            Inscribirme por correo
          </button>
          
          <button 
            className={style.boton} 
            onClick={handleWhatsAppClick}
            type="button"
          >
            Inscribirme por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
import style from "./Empresas.module.css";

export default function Empresas() {
  const logos = [
    { src: "/img/empresas/AACI.png", alt: "AACI" },
    { src: "/img/empresas/cambridge.png", alt: "Cambridge English" },
    { src: "/img/empresas/camara-argentina.png", alt: "Cámara Argentina" },
    { src: "/img/empresas/CARAA.png", alt: "CARAA" },
    { src: "/img/empresas/OIEP.png" , alt:"OIEP"},
    { src: "/img/empresas/AATALC.png" , alt:"AATALAC"},
  ];

  // Para que el loop sea infinito y no se vea el corte, 
  // duplicamos la lista de logos
  const todosLosLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className={style.instituciones}>
      <h2 className={style.institucionesTitulo}>
        CERTIFICAN NUESTROS CURSOS
      </h2>
      
      <div className={style.sliderContainer}>
        <div className={style.sliderTrack}>
          {todosLosLogos.map((logo, index) => (
            <div key={index} className={style.slide}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

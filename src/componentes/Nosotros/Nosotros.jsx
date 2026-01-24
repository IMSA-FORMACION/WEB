import style from './Nosotros.module.css';
import logo from '../../assets/images/IMSA_Logo_Color.png';
import { LightbulbIcon, TargetIcon, BookOpenIcon, RocketIcon  } from '@phosphor-icons/react';
import {Link} from 'react-router-dom'
export default function Nosotros() {
  return (
    <section id='nosotros' className={style.nosotros}>
      <div className={style.contenido}>
        <div className={style.texto}>
          <div className={style.tituloContainer}>
            <h2 className={style.titulo}>SOMOS</h2>
            <img src={logo} alt="IMSA Logo" className={style.logo} />
          </div>
   <div className={style.parrafos}>
  <p>
    En <strong>IMSA GRUPO EDUCATIVO</strong> entendemos que <em>aprender</em> algo nuevo es mucho más
    que adquirir información, es abrir una puerta hacia el futuro. Este proyecto es
    nuestro sueño hecho realidad; una idea que venimos gestando con dedicación durante
    años y que hoy cobra vida para <em>acompañarte</em>.
  </p>

  <p>
    Sabemos que en el camino del aprendizaje pueden surgir dudas y miedos. Por eso,
    nuestra mayor diferencia es la <em>cercanía</em>. No somos solo una plataforma de
    cursos, somos guías que caminan con vos.
  </p>

  <p>
    Como docentes de vocación nuestra prioridad es brindar las herramientas necesarias
    para que cada uno de nuestros estudiantes se sienta seguro, capaz y preparado para
    los desafíos de hoy.
  </p>

  <p>
    Ángeles y Sonia.
  </p>
</div>

<div className={style.proyecto}>
  <h5 className={style.subtitulo}>
   " TU PROGRESO ES NUESTRO PROYECTO MÁS IMPORTANTE "
  </h5>

  <div className={style.dosColumnas}>
    <p>
     <strong>¿Por qué hoy?</strong>  Para brindar una opción de formación y capacitación integral a
      personas que buscan prepararse para el mundo laboral, combinando la excelencia
      académica con un acompañamiento humano y cercano. Nuestra misión es asegurar que
      cada alumno cuente con el apoyo y la confianza necesaria para transformar su
      futuro.
    </p>

    <p>
      <strong>¿Qué esperamos alcanzar?</strong> Convertirnos en el grupo educativo referente por su
      calidad humana y pedagógica, siendo reconocidos no solo por lo que enseñamos sino
      por cómo estamos acompañando a nuestra comunidad. Aspiramos a ser el camino entre
      el deseo de aprender y la oportunidad de trabajar, expandiendo nuestro sueño para
      llegar a cada persona que busque crecer profesionalmente.
    </p>
  </div>



  <p className={style.parrafoFinal}>
    Después de años de soñar este proyecto, las puertas de IMSA están abiertas para
    brindarte todo lo que necesitás para tu crecimiento y desarrollo.
  </p>

 
</div>



          <div className={style.botonContainer}>
            <Link to={'/contacto'} className={style.botonContacto}>Contactate con nosotros</Link>
          </div>
        </div>

    
      </div>
    </section>
  );
}



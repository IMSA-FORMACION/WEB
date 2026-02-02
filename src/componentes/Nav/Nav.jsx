import style from './Nav.module.css';
import logo from '../../assets/images/logo_imsa_violeta_negro.png';
import { IoCaretDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

// Definimos los enlaces de redes para no repetir código
const REDES = [
  { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/people/IMSA/61585515595551/" },
  { id: 2, icon: <LuInstagram />, url: "https://www.instagram.com/imsa.formacion" }
];

const URL_INGRESAR = "https://imsaformacion-administracion.etnaeducacion.com.ar/";

export default function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleResize = () => {
      if (!mediaQuery.matches) setMenuAbierto(false);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const handleMenuClick = () => setMenuAbierto(false);

  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Link to="/"><img src={logo} alt="Logo IMSA" /></Link>
      </div>

      {/* NAVEGACIÓN ESCRITORIO */}
      <div className={style.enlaces}>
        <Link to='/cursos'>CURSOS DE FORMACIÓN <IoCaretDown /></Link>
        <Link to="/#nosotros">NOSOTROS</Link>
        <Link to='/contacto'>CONTACTO</Link>
        <a 
          href={URL_INGRESAR} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={style.ingresar}
        >
          INGRESAR AL CAMPUS
        </a>
      </div>

      {/* REDES ESCRITORIO */}
      <div className={style.redes}> 
        {REDES.map(red => (
          <a key={red.id} href={red.url} target="_blank" rel="noopener noreferrer" className={style.socialLink}>
            {red.icon}
          </a>
        ))}
      </div>

      {/* BOTÓN HAMBURGUESA (Cambiado a <button> por accesibilidad) */}
      <button className={style.hamburguesa} onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Menu">
        {menuAbierto ? <CiMenuFries size={28} style={{ color:'#7a62fb' }} /> 
                     : <CiMenuBurger size={28} style={{ color:'#7a62fb' }} />}
      </button>

      {/* MENÚ MÓVIL */}
      {menuAbierto && (
        <div className={style.menuMobile}>
<nav className={style.menuLinks}>
  <Link to='/cursos' onClick={handleMenuClick}>CURSOS DE FORMACIÓN</Link>
  <Link to="/#nosotros" onClick={handleMenuClick}>NOSOTROS</Link>
  <Link to='/contacto' onClick={handleMenuClick}>CONTACTO</Link>
  
  <a 
    href={URL_INGRESAR} 
    target="_blank" 
    rel="noopener noreferrer" 
    onClick={handleMenuClick}
    className={style.ingresarMobile}
  >
    INGRESAR AL CAMPUS
  </a>
</nav>

          <div className={style.menuRedes}>
            {REDES.map(red => (
              <a key={red.id} href={red.url} target="_blank" rel="noopener noreferrer" onClick={handleMenuClick} className={style.socialLink}>
                {red.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
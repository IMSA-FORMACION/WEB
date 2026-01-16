import style from './Nav.module.css';
import logo from '../../assets/images/logo_imsa_violeta_negro.png';
import { IoCaretDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

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

  const handleMenuClick = () => setMenuAbierto(false); // cierra menú móvil

  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Link to="/"><img src={logo} alt="Logo IMSA" /></Link>
      </div>

      <div className={style.enlaces}>
        <Link to='/cursos'>CURSOS DE FORMACIÓN <IoCaretDown /></Link>

        {/* Link a nosotros con hash */}
        <Link to="/#nosotros" onClick={handleMenuClick}>
          NOSOTROS
        </Link>

        <Link to='/contacto'>CONTACTO</Link>
        <a className={style.ingresar}>INGRESAR</a>
      </div>

      <div className={style.redes}> 
         <a 
    href="https://www.facebook.com/people/IMSA/61585515595551/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={style.socialLink}
  >
    <FaFacebookF />
  </a>
        {/* Enlace Instagram Escritorio */}
        <a 
          href="https://www.instagram.com/imsa.formacion" 
          target="_blank" 
          rel="noopener noreferrer"
          className={style.socialLink}
        >
          <LuInstagram />
        </a>
      </div>

      <div className={style.hamburguesa} onClick={() => setMenuAbierto(!menuAbierto)}>
        {menuAbierto ? <CiMenuFries size={28} style={{ color:'#7a62fb' }} /> 
                     : <CiMenuBurger size={28} style={{ color:'#7a62fb' }} />}
      </div>

      {menuAbierto && (
        <div className={style.menuMobile}>
          <nav className={style.menuLinks}>
            <Link to='/cursos' onClick={handleMenuClick}>CURSOS DE FORMACIÓN <IoCaretDown /></Link>

            <Link to="/#nosotros" onClick={handleMenuClick}>
              NOSOTROS
            </Link>
            <Link to='/contacto' onClick={handleMenuClick}>CONTACTO</Link>
          </nav>
        <div className={style.menuRedes}>
  <a 
    href="https://www.facebook.com/people/IMSA/61585515595551/" 
    target="_blank" 
    rel="noopener noreferrer"
    onClick={handleMenuClick}
    className={style.socialLink}
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://www.instagram.com/imsa.formacion" 
    target="_blank" 
    rel="noopener noreferrer"
    onClick={handleMenuClick}
    className={style.socialLink}
  >
    <LuInstagram />
  </a>
</div>
        </div>
      )}
    </div>
  );
}
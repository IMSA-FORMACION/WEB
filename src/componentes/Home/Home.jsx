import style from './Home.module.css';
import Nav from '../Nav/Nav.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Le damos un pequeño delay para esperar que termine el loader y se renderice el elemento
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  

  return (
    <div className={style.home}>
      <Nav />
      <Main />
      <Footer />

      <a
        href="https://wa.me/5491137729571"
        className={style.wafloat}
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

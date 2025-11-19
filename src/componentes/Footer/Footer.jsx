import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección 1: Ubicación */}
        <div className={styles.section}>
          <h4>Ubicación</h4>
          <p>Moreno 1571, Ingeniero Maschwitz, Provincia de Buenos Aires</p>
        </div>

        {/* Sección 2: Contacto */}
        <div className={styles.section}>
          <h4>Contacto</h4>
          <div className={styles.contactItem}>
            <a href="mailto:formacion@imsa.com" className={styles.contactLink}>
              <HiOutlineMail size={20} />
              <span>formacion@imsa.com</span>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://wa.me/5491159489408" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaWhatsapp size={20} />
              <span>+54 9 11 3774-9571</span>
            </a>
          </div>
        </div>

        {/* Sección 3: Redes sociales */}
        <div className={styles.section}>
          <h4>Redes Sociales</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/imsa.formacion" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebookF size={20} />
              <span className={styles.socialText}>imsa.formacion</span>
            </a>
            <a href="https://www.instagram.com/imsa.formacion" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram size={20} />
              <span className={styles.socialText}>imsa.formacion</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2025 Grupo Educativo IMSA. Todos los derechos reservados.
      </div>
    </footer>
  );
}



// src/componentes/ComingSoonModal/ComingSoonPage.jsx

import { useState } from 'react';
import styles from './ComingSoonPage.module.css';
// Eliminada: import imsaLogo from '../../assets/images/logo_imsa_violeta_negro.png';

const ComingSoonModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email registrado: ${email}`);
        setMessage('¡Te has registrado con éxito! Gracias por tu interés.');
        setEmail('');
    };

    const handleClose = () => {
        localStorage.setItem('comingSoonModalClosed', 'true');
        onClose();
    };

    return (
        <div className={styles.modalBackdrop}>

            {/* El Wrapper de la tarjeta con el efecto de glow/sombra */}
            <div className={styles.modalCardWrapper}>

                {/* Botón de cerrar (X) - Posicionado afuera del modalContent */}
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Cerrar"
                >
                    &times;
                </button>

                {/* Contenido principal */}
                <div className={styles.modalContent}>

                    {/* COLUMNA ÚNICA: Texto y Formulario */}
                    <div className={styles.textContent}>

                        {/* Eliminada: div.boxLogo y img.imsaLogo */}

                        <p className={styles.newTag}>¡PRÓXIMAMENTE!</p>
                        <h2 className={styles.titlePart1}>Tu camino hacia el</h2>
                        <h2 className={styles.titlePart2}>Éxito Global</h2>

                        <p className={styles.description}>
                            Estamos finalizando la plataforma con programas de vanguardia. Regístrate ahora y sé el primero en asegurar tu lugar con un <span className={styles.descuento}>descuento exclusivo del 15%</span>.
                        </p>

                        <form className={styles.csForm} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.actionButton}>
                                ¡Quiero mi Descuento!
                            </button>
                        </form>
                        {message && <p className={styles.csMessage}>{message}</p>}

                        <p className={styles.continueLink} onClick={handleClose}>
                            <span className={styles.linkText}>Continuar navegando sin registrarme.</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;
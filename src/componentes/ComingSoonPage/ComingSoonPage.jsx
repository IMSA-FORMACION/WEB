// src/componentes/ComingSoonModal/ComingSoonPage.jsx

import { useState } from 'react';
import styles from './ComingSoonPage.module.css';

const ComingSoonModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // 🚨 NUEVO ESTADO PARA CONTROLAR LA VISTA 🚨

    // ENDPOINT AJAX DE FORMSUBMIT CONFIGURADO PARA imsaformacion@gmail.com
    const FORMSUBMIT_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/imsaformacion@gmail.com';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setMessage('');

        const formData = new FormData();
        formData.append('email', email);
        formData.append('_subject', 'Nuevo Registro Descuento - imsaformacion');
        formData.append('_captcha', 'false');

        try {
            const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // 🚨 CAMBIOS AL ENVIAR CON ÉXITO 🚨
                setMessage('¡Email registrado con éxito! Muchas gracias por tu interés.');
                setIsSubmitted(true); // Mostrar la nueva vista
                setEmail(''); // Limpiar el campo

               

            } else {
                setMessage('Hubo un error en el servidor al intentar registrar. Por favor, verifica tu dirección e inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al enviar el formulario con FormSubmit:', error);
            setMessage('Error de conexión. Por favor, revisa tu red e inténtalo más tarde.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        localStorage.setItem('comingSoonModalClosed', 'true');
        onClose();
    };

    // --- Contenido de Agradecimiento Simplificado ---
    const SuccessContent = (
        <div className={styles.successContent}>
            <h2 className={styles.successTitle}>¡Registro Completado!</h2>
            <p className={styles.successMessage}>
                Muchas gracias por tu interés. Hemos asegurado tu **descuento exclusivo del 15%**. Pronto nos pondremos en contacto contigo con las fechas de lanzamiento y más detalles.
            </p>
        </div>
    );
    // ------------------------------------------------

    // --- Contenido Principal (Promocional y Formulario) ---
    const MainContent = (
        <div className={styles.textContent}>

            <p className={styles.newTag}>¡PRÓXIMAMENTE!</p>
            <h2 className={styles.titlePart1}>Tu camino hacia el</h2>
            <h2 className={styles.titlePart2}>Éxito Global</h2>
            <p className={styles.description}>
                Estamos finalizando la plataforma con programas de vanguardia. Regístrate ahora y sé el primero en asegurar tu lugar con un <span className={styles.descuento}>descuento exclusivo del 15%</span>.
            </p>

            {/* EL FORMULARIO SOLO SE MUESTRA SI NO HAY MENSAJE DE ÉXITO O ERROR (temporal) */}
            {!message && (
                <form className={styles.csForm} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className={styles.actionButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : '¡Quiero mi Descuento!'}
                    </button>
                </form>
            )}

            {/* Mostrar el mensaje de error si existe (cuando isSubmitted es false) */}
            {message && !isSubmitted && <p className={styles.errorMessage}>{message}</p>}
        </div>
    );
    // ------------------------------------------------

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalCardWrapper}>
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                <div className={styles.modalContent}>
                    {/* 🚨 RENDERIZADO CONDICIONAL CLAVE 🚨 */}
                    {isSubmitted ? SuccessContent : MainContent}

                    <p className={styles.continueLink} onClick={handleClose}>
                        <span className={styles.linkText}>
                            {isSubmitted ? 'Cerrar Ahora' : 'Continuar navegando sin registrarme.'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;
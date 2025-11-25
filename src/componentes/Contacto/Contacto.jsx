// src/componentes/Contacto/Contacto.jsx

import React, { useState, useEffect } from "react";
import styles from "./Contacto.module.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        consulta: "",
    });

    const [enviado, setEnviado] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para evitar doble clic
    const [error, setError] = useState(null); // Nuevo estado para manejar errores
    const [imagen, setImagen] = useState("/img/contacto/contacto2.svg"); // Imagen inicial

    // Endpoint FormSubmit para envío AJAX a imsaformacion@gmail.com
    const FORMSUBMIT_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/administracion@imsaformacion.com';

    // Scroll al top al montar
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isSubmitting) return;

        setIsSubmitting(true);
        setError(null);
        
        // 1. Preparar FormData para FormSubmit
        const data = new FormData();
        // Los nombres de los campos deben coincidir con los nombres en el estado
        data.append('Nombre', formData.nombre);
        data.append('Email', formData.email);
        data.append('Teléfono', formData.telefono);
        data.append('Consulta', formData.consulta);
        data.append('_subject', 'Nueva Consulta de Contacto IMSA'); // Asunto del email
        data.append('_captcha', 'false'); // Desactiva el Captcha de FormSubmit (opcional)

        try {
            // 2. Realizar la petición fetch al endpoint AJAX
            const response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
                method: 'POST',
                body: data,
            });
            
            // 3. Manejo de la respuesta
            if (response.ok) {
                setEnviado(true);
                setImagen("/img/contacto/contacto3.svg"); // Cambia la imagen
                // Opcional: Limpiar el formulario después del envío exitoso
                setFormData({ nombre: "", email: "", telefono: "", consulta: "" });
            } else {
                // Manejo de errores basado en la respuesta HTTP
                setError("Ocurrió un error al enviar el formulario. Intenta de nuevo más tarde.");
                console.error('Error de servidor FormSubmit:', response.status);
            }
        } catch (err) {
            // Manejo de errores de red o fetch
            setError("Error de conexión. Por favor, revisa tu conexión a internet.");
            console.error('Error de red:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Nav />
            <div className={styles.contactoContainer}>
                <div className={styles.contactoContent}>
                    {/* Imagen grande a la izquierda */}
                    <div className={styles.contactoImg}>
                        <img
                            src={imagen}
                            alt="Ilustración contacto"
                            className={styles.ilustracion}
                        />
                    </div>

                    {/* Formulario */}
                    <div className={styles.contactoFormWrapper}>

                        {!enviado ? (<>
                            <h2 className={styles.titulo}>Contacto</h2>
                            <form onSubmit={handleSubmit} className={styles.contactoForm}>
                                <label>
                                    Nombre completo<span className={styles.req}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />

                                <label>
                                    Correo electrónico<span className={styles.req}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />

                                <label>Teléfono (opcional)</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />

                                <label>
                                    Consulta<span className={styles.req}>*</span>
                                </label>
                                <textarea
                                    name="consulta"
                                    rows="4"
                                    value={formData.consulta}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                                
                                {error && <p className={styles.errorMessage}>{error}</p>}
                                
                                <button 
                                    type="submit" 
                                    className={styles.btnEnviar}
                                    disabled={isSubmitting} // Deshabilitar durante el envío
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </button>
                            </form></>
                        ) : (
                            <div className={styles.mensajeEnviado}>
                                <h3>¡Consulta enviada con éxito!</h3>
                                <p>Te responderemos a la brevedad a tu correo electrónico.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

            <a
                href="https://wa.me/5491159489408"
                className={styles.wafloat}
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
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
  const [imagen, setImagen] = useState("/img/contacto/contacto2.svg"); // Imagen inicial

  // Scroll al top al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setImagen("/img/contacto/contacto3.svg"); // Cambia a imagen3 al enviar
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
                />

                <label>Teléfono (opcional)</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
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
                ></textarea>

                <button type="submit" className={styles.btnEnviar}>
                  Enviar
                </button>
              </form></>
            ) : (
              <div className={styles.mensajeEnviado}>
                <h3>¡Gracias por contactarte!</h3>
                <p>Te responderemos a la brevedad.</p>
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


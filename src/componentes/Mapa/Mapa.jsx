import style from './Mapa.module.css'
export default function Mapa() {
  return (
    <div className={style.mapa}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.2826550553136!2d-58.7373039!3d-34.394160899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca029ffccceef%3A0x27f8920dfdfb33fa!2sMoreno%201571%2C%20B1623BZX%20Ingeniero%20Maschwitz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761666385293!5m2!1ses-419!2sar"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

// src/components/Main/Main.jsx
import Carrousel from '../Carrousel/Carrousel';
import Formacion from '../Formacion/Formacion';
import Redes from '../Redes/Redes';
import Nosotros from '../Nosotros/Nosotros';
import Mapa from '../Mapa/Mapa';
import Cursos from '../Cursos/Cursos';
import Internacional from '../Internacional/Internacional'
import Empresas from '../Empresas/Empresas'
import style from './Main.module.css'

export default function Main() {
  return (
    <main className={style.main}>
      <Carrousel />
      <Formacion />
      <Internacional/>
     <Empresas/>
      <Cursos/>
       <Redes />
      <Nosotros/>
      <Mapa/>
    </main>
  );
}

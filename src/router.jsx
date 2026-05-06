import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './componentes/RootLayout.jsx'; // El que creamos arriba
import App from './App.jsx';
import CursosPage from './componentes/CursosPage/CursosPage.jsx';
import CursoDetalle from './componentes/CursoDetalle/CursoDetalle.jsx';
import Contacto from './componentes/Contacto/Contacto.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // El padre que maneja el Scroll
    children: [
      { path: "/", element: <App /> },
      { path: "/cursos", element: <CursosPage /> },
      { path: "/cursos/:id", element: <CursoDetalle /> },
      { path: "/contacto", element: <Contacto /> }
    ]
  }
], {
  scrollRestoration: false
});

export default function Router() {
  return <RouterProvider router={router} />;
}
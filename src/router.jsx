import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import CursosPage from './componentes/CursosPage/CursosPage.jsx'
import CursoDetalle from './componentes/CursoDetalle/CursoDetalle.jsx'
import Contacto from './componentes/Contacto/Contacto.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
    { path: "/cursos", element: <CursosPage /> },
    {path:'/cursos/:id', element:<CursoDetalle/>},
    {path:'/contacto',element:<Contacto/>}

]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hacemos scroll en todos los elementos posibles
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Forzar reflow - eliminamos scrollBehavior para asegurar scroll instantáneo
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Scroll final forzado
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
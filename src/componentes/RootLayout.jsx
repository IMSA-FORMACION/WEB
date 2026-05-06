import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet /> {/* Aquí es donde se renderizan CursosPage, Detalle, etc. */}
    </>
  );
}
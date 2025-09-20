import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      {/* Espace sous le header fixe (~72px) */}
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

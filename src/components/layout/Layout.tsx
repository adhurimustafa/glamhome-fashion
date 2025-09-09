import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      {/* pousse tout le contenu sous le header fixe */}
      <main className="min-h-screen pt-[calc(env(safe-area-inset-top)+72px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

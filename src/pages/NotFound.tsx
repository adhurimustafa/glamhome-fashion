import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-6xl font-serif font-light text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-medium text-accent">Page Introuvable</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
        >
          Retour à l'Accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;

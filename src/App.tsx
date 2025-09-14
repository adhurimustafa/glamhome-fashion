import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-right" richColors />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />

              {/* ⛳️ Redirection propre si quelqu’un arrive encore sur /order */}
              <Route path="/order" element={<Navigate to="/contact" replace />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

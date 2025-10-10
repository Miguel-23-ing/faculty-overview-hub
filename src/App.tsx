import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docencia from "./pages/Docencia";
import Investigacion from "./pages/Investigacion";
import Formacion from "./pages/Formacion";
import Actividades from "./pages/Actividades";
import Organizaciones from "./pages/Organizaciones";
import Escalafon from "./pages/Escalafon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docencia" element={<Docencia />} />
          <Route path="/investigacion" element={<Investigacion />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/organizaciones" element={<Organizaciones />} />
          <Route path="/escalafon" element={<Escalafon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

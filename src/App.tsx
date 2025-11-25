import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 👉 IMPORTA la página de inmersión si tienes un archivo real
// Si no existe, temporalmente puedes usar Index u otra página
import Inmersion from "./pages/Inmersion"; 
// Si no existe ese archivo, crea uno o usa Index:
// import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Nueva ruta de inmersión → ESTA ES LA QUE FALTABA */}
          <Route path="/inmersion" element={<Inmersion />} />

          {/* Opción alternativa si no tienes página propia */}
          {/* <Route path="/inmersion" element={<Index />} /> */}

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Foto from "./pages/Foto";
import Appartamenti from "./pages/Appartamenti";
import LeSpiagge from "./pages/LeSpiagge"; // Import the new LeSpiagge page
import Contatti from "./pages/Contatti"; // Import the new Contatti page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/appartamenti" element={<Appartamenti />} />
          <Route path="/le-spiagge" element={<LeSpiagge />} /> {/* Add the new Le Spiagge route */}
          <Route path="/foto" element={<Foto />} />
          <Route path="/contatti" element={<Contatti />} /> {/* Add the new Contatti route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
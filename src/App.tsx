import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEOHead } from "@/components/SEOHead";
import Index from "./pages/Index";
import Changelog from "./pages/Changelog";
import Security from "./pages/Security";
import Developers from "./pages/Developers";
import VsBygglet from "./pages/VsBygglet";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CookiePolicyPage from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOHead />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/security" element={<Security />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/vs-bygglet" element={<VsBygglet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/funktioner" element={<Features />} />
          <Route path="/priser" element={<Pricing />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/integritetspolicy" element={<Privacy />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/villkor" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

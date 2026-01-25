import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EasterEggsProvider } from "@/components/EasterEggs";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Changelog from "./pages/Changelog";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Security from "./pages/Security";
import Developers from "./pages/Developers";
import VsBygglet from "./pages/VsBygglet";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <EasterEggsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/security" element={<Security />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/vs-bygglet" element={<VsBygglet />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EasterEggsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

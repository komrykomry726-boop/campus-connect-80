import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Students from "./pages/Students";
import Academics from "./pages/Academics";
import Enrollment from "./pages/Enrollment";
import Examinations from "./pages/Examinations";
import Staff from "./pages/Staff";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
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
          <Route path="/students" element={<AppLayout><Students /></AppLayout>} />
          <Route path="/academics" element={<AppLayout><Academics /></AppLayout>} />
          <Route path="/enrollment" element={<AppLayout><Enrollment /></AppLayout>} />
          <Route path="/examinations" element={<AppLayout><Examinations /></AppLayout>} />
          <Route path="/staff" element={<AppLayout><Staff /></AppLayout>} />
          <Route path="/finance" element={<AppLayout><Finance /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><Reports /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

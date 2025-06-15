
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Verify from "./pages/Verify";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import Profile from "./pages/Profile";
import ParentPortal from "./pages/ParentPortal";
import SetupEnv from "./pages/SetupEnv";
import ResetPassword from "./pages/ResetPassword";
import Internships from "./pages/Internships";
import HelpSupport from "./pages/HelpSupport";
import Error from "./pages/Error";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="/setup/env" element={<SetupEnv />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/error" element={<Error />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

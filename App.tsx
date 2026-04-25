import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { ResourcesRoutes } from './pages/Resources';
import { Thanks, NotFound, Privacy, Terms } from './pages/GenericPages';
import { Helmet } from 'react-helmet-async';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Platform Routes */}
          <Route path="/platform/*" element={<Platform />} />

          {/* Solutions Routes */}
          <Route path="/solutions/*" element={<Solutions />} />

          {/* Industries Routes */}
          <Route path="/industries/*" element={<Industries />} />

          {/* Resources Routes */}
          <Route path="/resources/*" element={<ResourcesRoutes />} />

          {/* Company Routes — support both old and new paths */}
          <Route path="/company/*" element={<Company />} />
          <Route path="/about" element={<Navigate to="/company/about" replace />} />

          {/* Contact / Auth */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Request Demo */}
          <Route path="/request-demo" element={<Navigate to="/contact" replace />} />

          {/* Legal — support both old and new paths */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />

          {/* Legacy Conversion */}
          <Route path="/thanks" element={<Thanks />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Bitint | Blockchain Intelligence Platform</title>
          <meta name="description" content="Blockchain intelligence for investigations, compliance, and risk management. White-box risk scoring, cross-chain tracing, and audit-ready evidence trails." />
        </Helmet>
            <AppLayout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
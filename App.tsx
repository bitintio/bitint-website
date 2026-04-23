import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

          {/* Company Routes */}
          <Route path="/company/*" element={<Company />} />

          {/* Contact / Auth */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Legal */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />

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
          <meta name="description" content="Blockchain intelligence for investigations, compliance, and risk management." />
        </Helmet>
            <AppLayout />
      </Router>
    </ThemeProvider>
  );
};

export default App;
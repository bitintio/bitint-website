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
import { RequestDemo } from './pages/RequestDemo';
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

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Bitint | Blockchain Intelligence Platform</title>
          <meta name="description" content="Blockchain intelligence for investigations, compliance, and risk management." />
        </Helmet>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
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

              {/* Legal */}
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/legal/terms" element={<Terms />} />

              {/* Conversion */}
              <Route path="/request-demo" element={<RequestDemo />} />
              <Route path="/thanks" element={<Thanks />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
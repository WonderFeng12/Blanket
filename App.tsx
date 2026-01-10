

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';

// Simple wrapper to scroll to top on navigation
// Added optional modifier '?' to children prop to resolve TypeScript error where it's seen as missing
const ScrollToTop = ({ children }: { children?: React.ReactNode }) => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
};

export default App;
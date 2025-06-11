import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Routers from '../Routers/Routers';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutContent = () => {
  const location = useLocation();

  // Pages that should NOT show Header and Footer
  const authPages = ['/login', '/signup'];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}
      <Routers />
      {!isAuthPage && <Footer />}
    </>
  );
};

const Layout = () => {
  return (
    <Router>
      <LayoutContent />
    </Router>
  );
};

export default Layout;

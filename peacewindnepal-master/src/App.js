// App.js
import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './Page/CustomNavbar';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import DonationInfo from './Page/DonationInfo';
import Footer from './Page/FooterPage';
import { VisibilityProvider, useVisibility } from './Page/visibilityContext'; // Import useVisibility

function ScrollToTop() {
  const { pathname } = useLocation();
  const { setVisibility } = useVisibility(); // Access setVisibility from the context

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setVisibility(false); // Reset visibility on navigation
  }, [pathname, setVisibility]);

  return null;
}

function App() {
  return (
    <Router>
      <VisibilityProvider>
        <ScrollToTop />
        <div className="App">
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonationInfo />} />
            {/* Add additional routes as needed */}
          </Routes>
          <Footer />
        </div>
      </VisibilityProvider>
    </Router>
  );
}

export default App;

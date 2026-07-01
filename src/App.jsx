import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import PageNavigation from "./components/PageNavigation";
import IntroScreen from "./components/IntroScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Club from "./pages/Club";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Nok from "./pages/Nok";
import Subscription from "./pages/Subscription";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show intro for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show intro screen first
  if (loading) {
    return <IntroScreen />;
  }

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />

      <div
        className="slider"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
        }}
      >
        {/* Home */}
        <div className="slide">
          <Home />
        </div>

        {/* About */}
        <div className="slide">
          <About />
        </div>

        {/* Membership */}
        <div className="slide">
          <Membership setCurrentPage={setCurrentPage} />
        </div>

        {/* Club */}
        <div className="slide">
          <Club />
        </div>

        {/* Community */}
        <div className="slide">
          <Community />
        </div>

        {/* Blog */}
        <div className="slide">
          <Blog />
        </div>

        {/* NOK */}
        <div className="slide">
          <Nok />
        </div>

        {/* Subscription */}
        <div className="slide">
          <Subscription />
        </div>

        {/* Contact */}
        <div className="slide">
          <Contact />
        </div>
      </div>

      {/* Global Navigation */}
      <PageNavigation
        currentPage={currentPage}
        totalPages={9}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
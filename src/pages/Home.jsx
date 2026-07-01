import { useState, useEffect } from "react";


import logo1 from "../assets/men12.png";
import logo2 from "../assets/men17.jpg";
import logo3 from "../assets/men10.jpg";
import logo4 from "../assets/men02.jpg";

function Home() {
  const images = [logo1, logo2, logo3, logo4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slideshow = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideshow);
  }, [images.length]);

  return (
    <section className="page hero-section">
      <div className="hero-left">
        <div className="hero-gradient"></div>

        <img
          src={images[currentImage]}
          alt="Brodigy"
          className="hero-logo"
        />
      </div>

      <div className="hero-right">
        <h1>
          Welcome,
          <br />
          Broda
        </h1>

        <div className="hero-line"></div>

        <p>
          This is <strong>Brodigy</strong>, an ecosystem for driven men.
          We are united by brotherhood, continuous personal growth,
          strategic collaboration and supportive success.
        </p>

        <h5 className="hero-mantra">
  Mantra <strong>#ConquerYourself</strong>
</h5>

      </div>
    </section>
  );
}

export default Home;
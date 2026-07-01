import "../styles/Portfolio.css";

import logo from "../assets/blogomain02.jpg";

// renamed properly for clarity
import meetup from "../assets/men17.jpg";
import leadership from "../assets/men18.jpg";
import networking from "../assets/men05.jpg";
import member from "../assets/men21.png";


function Community() {
  return (
    <section className="page portfolio-page">

      <div className="portfolio-grid">

        {/* Left Logo */}
        <div className="portfolio-logo">
          <img src={logo} alt="Brodigy Community logo" />
        </div>

        {/* Intro */}
        <div className="portfolio-intro">
          {/* <h1>Brodigy Club</h1> */}
          <div className="portfolio-line"></div>

          <p>
            <strong>Brodigy Community </strong> is a thriving ecosystem where ambitious men connect, bond, collaborate, and grow together as bothers. It is a space built on our core values, and meaningful relationships, creating opportunities for personal development, professional advancement, and collective success. Through networking, mentorship, events, and collaboration, members gain access to a supportive environment that encourages growth, accountability, and lasting impact.
          </p>
        </div>

        {/* Cards */}
        <div className="portfolio-cards">

          <div
            className="small-card"
            style={{
              backgroundImage: `url(${meetup})`,
            }}
          >
            <div className="card-overlay">
            <h3>Lifestyle</h3>
            <p>
              Living with purpose, discipline, and excellence.
            </p>
            </div>
          </div>

          <div
            className="small-card"
            style={{
              backgroundImage: `url(${leadership})`,
            }}
          >
            <div className="card-overlay">
              <h3>Mentorship</h3>
              <p>
                Learning from experienced brodas and leaders.
              </p>
            </div>
          </div>

          <div
            className="small-card"
            style={{
              backgroundImage: `url(${networking})`,
            }}
          >
            <div className="card-overlay">
              <h3>Excellence</h3>
              <p>
                Pursuing discipline, integrity, and continuous self-improvement.
              </p>
            </div>
          </div>

        </div>

        {/* Big Image */}
        <div
          className="portfolio-feature"
          style={{
            backgroundImage: `url(${member})`,
          }}
        >
          <div className="card-overlay">
            <h3>Impact</h3>
              <p>
                Making meaningful contributions to our communities through collective action.
            </p>
          </div>
        </div>

      </div>

      

    </section>
  );
}

export default Community;
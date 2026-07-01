import "../styles/Portfolio.css";

import logo from "../assets/blogomain02.jpg";

// renamed properly for clarity
import meetup from "../assets/men02.jpg";
import leadership from "../assets/men03.jpg";
import networking from "../assets/men10.jpg";
import member from "../assets/brody02.png";



function Club() {
  return (
    <section className="portfolio-page">

      <div className="portfolio-grid">

        {/* Left Logo */}
        <div className="portfolio-logo">
         <img src={logo} alt="Brodigy Club logo" />
        </div>

        {/* Intro */}
        <div className="portfolio-intro">
          {/* <h1>Brodigy Club</h1> */}
          <div className="portfolio-line"></div>

          <p>
            <strong>Brodigy Club </strong>is an exclusive community of ambitious and
            purpose-driven men united by a commitment to excellence,
            integrity, and continuous growth.

            We believe success is amplified through brotherhood,
            collaboration, and shared experiences.

            The club provides a platform for members to connect,
            learn, lead, and access opportunities that foster
            personal development, professional advancement,
            and collective impact.

            At Brodigy, every member is encouraged to become the
            best version of himself while contributing to the
            growth of others.
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
            <h3>Personal Growth</h3>
            <p>
              Becoming the best version of himself.
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
              <h3>Leadership</h3>
              <p>
                Men who inspire, influence
                and serve others.
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
              <h3>Networking</h3>
              <p>
                Connecting ambitious brodas with
                opportunities.
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
            <h3>Brotherhood Meetup</h3>
              <p>
                Building lifelong relationships founded on trust,
                loyalty and shared purpose.
            </p>
          </div>
        </div>

      </div>

      

    </section>
  );
}

export default Club;
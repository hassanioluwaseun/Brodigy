import aboutImage from "../assets/men16.png";
import "../styles/about.css";




import {
  FaUsers,
  FaMountain,
  FaShieldAlt,
  FaCrown,
  FaHandshake,
  FaFlagCheckered,
} from "react-icons/fa";

function About() {
  return (
    <section className="page about-page">

      {/* ================= Hero ================= */}

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="about-overlay"></div>

        <div className="about-hero-content">
{/* 
          <span className="about-tag">
            BRODIGY
          </span> */}

          <h1>
            Our <span>Club</span>
          </h1>

          <div className="about-divider"></div>

          <p>
            Brodigy is an exclusive brodahood of ambitious men committed to
            growth, excellence, and meaningful connections. A space where
            brodas learn, lead, and succeed together.
          </p>

        </div>

      </section>

      {/* ================= Core Values ================= */}

      <section className="core-values">

        <div className="section-heading">

          <span>OUR FOUNDATION</span>

          <h2>Core Values</h2>

          <div className="heading-line"></div>

          <p>
            At Brodigy, we are united by a commitment to Brodahood,
            Growth, Integrity, Excellence, Collaboration, and Impact.
            These values shape our culture, strengthen our relationships,
            and inspire us to support one another in building meaningful
            lives, successful ventures, and lasting legacies.
          </p>

        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>

            <h3>Brodahood</h3>

            <p>
              Building genuine relationships rooted in trust,
              loyalty and lifelong support.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaMountain />
            </div>

            <h3>Growth</h3>

            <p>
              Pursuing continuous personal, spiritual,
              financial and professional development.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaShieldAlt />
            </div>

            <h3>Integrity</h3>

            <p>
              Living honestly, leading responsibly and
              remaining accountable in everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaCrown />
            </div>

            <h3>Excellence</h3>

            <p>
              Refusing mediocrity and striving to deliver
              our absolute best every single day.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaHandshake />
            </div>

            <h3>Collaboration</h3>

            <p>
              Winning together through mentorship,
              teamwork and shared opportunities.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaFlagCheckered />
            </div>

            <h3>Impact</h3>

            <p>
              Creating positive change in our families,
              communities and future generations.
            </p>
          </div>

        </div>

       

      </section>

    </section>
  );
}

export default About;
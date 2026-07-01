import "../styles/Nok.css";

import topImage from "../assets/men08.jpg";
import bottomImage from "../assets/whole.png";

import { BsArrowRight } from "react-icons/bs";

function Nok({ setCurrentPage }) {
  return (
    <section className="nok-page">

      {/* Top Section */}
      <div className="nok-top">

        {/* Left Image */}
        <div className="nok-left">
          <img src={topImage} alt="Next of Kin" />
        </div>

        {/* Right Content */}
        <div className="nok-right">

          <h1>Next of Kin (NOK)</h1>

          <div className="nok-line"></div>

          <p>
            The Next of Kin (NOK) program enables members to nominate a trusted
            broda within the Brodigy community as their designated successor and
            representative. This individual serves as a trusted ally who can
            provide guidance, maintain important connections, support community
            initiatives, and help carry forward the member's values, vision,
            and legacy within the brodahood.
          </p>

        </div>

      </div>

      {/* Bottom Image */}
      <div className="nok-bottom">
        <img src={bottomImage} alt="Community" />
      </div>

      {/* Next Button */}
      <button
        className="hero-btn next-page-btn"
        onClick={() => setCurrentPage(7)}
      >
        <BsArrowRight />
      </button>

    </section>
  );
}

export default Nok;
import "../styles/Blog.css";


import featured from "../assets/men14.png";
import latest1 from "../assets/men05.jpg";
import latest2 from "../assets/men17.jpg";
import latest3 from "../assets/men20.jpg";



function Blog() {
  return (
    <section className="blog-page">

      <div className="blog-header">
        <span>BRODIGY JOURNAL</span>
        <h1>Insights & Stories</h1>
        <div className="blog-line"></div>
      </div>

      <div className="blog-grid">

        {/* Featured Article */}

        <div
          className="featured-blog"
          style={{
            backgroundImage: `url(${featured})`,
          }}
        >
          <div className="blog-overlay">

            <h2>
              Building Men of Purpose
            </h2>

            <p>
              Discover how intentional brotherhood,
              leadership and personal growth shape
              exceptional men.
            </p>

            <button>
              Coming Soon
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="blog-list">

          <div className="blog-card">

            <img src={latest1} alt="" />

            <div>

              <h3>Leadership</h3>

              <p>
                Becoming a man others naturally trust.
              </p>

            </div>

          </div>

          <div className="blog-card">

            <img src={latest2} alt="" />

            <div>

              <h3>Lifestyle</h3>

              <p>
                Why every successful man needs a tribe.
              </p>

            </div>

          </div>

          <div className="blog-card">

            <img src={latest3} alt="" />

            <div>

              <h3>Legacy</h3>

              <p>
                Living today with tomorrow in mind.
              </p>

            </div>

          </div>

        </div>

      </div>

      

    </section>
  );
}

export default Blog;
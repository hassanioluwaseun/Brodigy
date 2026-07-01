import "../styles/Subscription.css";

function Subscription() {
  return (
    <section className="sub-page">

      {/* atmospheric background layers */}
      <div className="sub-bg" />
      <div className="sub-grid" />

      <div className="sub-container">

        {/* LEFT: STORY */}
        <div className="sub-left">

          <div className="sub-kicker">BRODIGY BRODAS</div>

          <h1>
            Building a brodahood<br />
            that funds its own future.
          </h1>

          <p>
            Your subscription is not a payment — it is participation in a structured ecosystem
            of growth, mentorship, leadership development, and community-powered impact.
          </p>

          <div className="sub-points">
            <div>• Mentorship & leadership programs</div>
            <div>• Community welfare support</div>
            <div>• Networking & collaboration events</div>
            <div>• Skill development initiatives</div>
          </div>

        </div>

        {/* RIGHT: CARD */}
        <div className="sub-right">

          <div className="sub-card">

            <div className="sub-badge">Monthly Dues</div>

            <h2>Collective</h2>

            <div className="sub-price">
              ₦5,000 <span>/month</span>
            </div>

            <p>
              A unified contribution model supporting every member’s growth and opportunities.
            </p>

            <button
              onClick={() =>
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSdd5zslxaapAlpHzyACvStwKNmKEfUc4Q1tCfT906_hG_MdUA/viewform?usp=header", "_blank")
              }
              className="sub-btn"
            >
              The best time is now
            </button>

            <a
  href="https://paystack.com/pay/your-payment-link"
  target="_blank"
  rel="noopener noreferrer"
  className="sub-footer"
>
  Secure payment via Paystack
</a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Subscription;
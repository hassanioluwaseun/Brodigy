import "../styles/Registration.css";
import { useState } from "react";

function Registration() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    occupation: "",
    location: "",

    linkedin: "",
    reason: "",
    contribution: "",
    goals: "",

    emergencyName: "",
    emergencyRelationship: "",
    emergencyEmail: "",
    emergencyPhone: "",

    idType: "",
    idNumber: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Application submitted successfully!");

    // Later you can send formData to your backend
  };

  return (
    <section className="reg-page">

      <div className="reg-header">
        <span>BRODIGY MEMBERSHIP</span>

        <h1>Application Form</h1>

        <p>
          Join a community of purpose-driven men committed to
          growth, leadership, and legacy.
        </p>
      </div>

      <div className="step-indicator">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
        <div className={step >= 4 ? "active" : ""}>4</div>
      </div>

      <form
        className="reg-form"
        onSubmit={handleSubmit}
      >

        {/* STEP 1 */}

        {step === 1 && (

          <div className="form-step">

            <h2>Personal Information</h2>

            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="text"
              placeholder="Date of Birth (DD/MM/YYYY)"
            />

            <input
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              type="text"
              placeholder="Occupation"
            />

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="Location"
            />

            <button
              type="button"
              onClick={() => setStep(2)}
            >
              Next →
            </button>

          </div>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <div className="form-step">

            <h2>About You</h2>

            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              type="text"
              placeholder="LinkedIn / Social Profile"
            />

            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Why do you want to join Brodigy?"
            />

            <textarea
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
              placeholder="What value can you contribute?"
            />

            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              placeholder="Your goals?"
            />

            <div className="btn-row">

              <button
                type="button"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
              >
                Next →
              </button>

            </div>

          </div>

        )}

        {/* STEP 3 */}

        {step === 3 && (

          <div className="form-step">

            <h2>Emergency Contact Person</h2>

            <input
              name="emergencyName"
              value={formData.emergencyName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              name="emergencyRelationship"
              value={formData.emergencyRelationship}
              onChange={handleChange}
              type="text"
              placeholder="Relationship"
              required
            />

            <input
              name="emergencyEmail"
              value={formData.emergencyEmail}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />

            <input
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
            />

            <div className="btn-row">

              <button
                type="button"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => setStep(4)}
              >
                Next →
              </button>

            </div>

          </div>

        )}

        {/* STEP 4 */}

        {step === 4 && (

          <div className="form-step">

            <h2>Identification & Declaration</h2>

            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              required
            >
              <option value="">Select ID Type</option>
              <option>NIN</option>
              <option>Voter's Card</option>
              <option>International Passport</option>
              <option>Driver's License</option>
            </select>

            <input
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              type="text"
              placeholder="ID Number"
              required
            />

            <label className="checkbox">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />

              I certify that all information provided is accurate.

            </label>

            <div className="btn-row">

              <button
                type="button"
                onClick={() => setStep(3)}
              >
                ← Back
              </button>

              <button type="submit">
                Submit Application
              </button>

            </div>

          </div>

        )}

      </form>

    </section>
  );
}

export default Registration;
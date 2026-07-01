function StepIndicator({ currentStep }) {

  const steps = [
    "Personal",
    "Contact",
    "Professional",
    "Membership",
    "Emergency",
    "Review",
  ];

  return (

    <div className="step-indicator">

      {steps.map((step, index) => (

        <div
          key={index}
          className={
            currentStep === index + 1
              ? "step active"
              : currentStep > index + 1
              ? "step completed"
              : "step"
          }
        >

          <div className="step-number">

            {index + 1}

          </div>

          <span>

            {step}

          </span>

        </div>

      ))}

    </div>

  );

}

export default StepIndicator;
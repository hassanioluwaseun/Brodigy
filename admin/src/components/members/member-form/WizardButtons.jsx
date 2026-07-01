function WizardButtons({

  step,
  nextStep,
  previousStep,

}) {

  return (

    <div className="wizard-buttons">

      {step > 1 && (

        <button
          className="secondary-btn"
          onClick={previousStep}
        >

          Previous

        </button>

      )}

      {step < 6 ? (

        <button
          className="primary-btn"
          onClick={nextStep}
        >

          Next →

        </button>

      ) : (

        <button
          className="primary-btn"
        >

          Save Member

        </button>

      )}

    </div>

  );

}

export default WizardButtons;
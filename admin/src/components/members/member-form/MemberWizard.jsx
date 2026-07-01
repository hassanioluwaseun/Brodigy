import { useState } from "react";

import StepIndicator from "./StepIndicator";
import PersonalStep from "./PersonalStep";
import ContactStep from "./ContactStep";
import ProfessionalStep from "./ProfessionalStep";
import MembershipStep from "./MembershipStep";
import EmergencyStep from "./EmergencyStep";
import ReviewStep from "./ReviewStep";
import WizardButtons from "./WizardButtons";

import "../../../styles/member-wizard.css";

function MemberWizard() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: {},
    contact: {},
    professional: {},
    membership: {},
    emergency: {},
  });

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {

      case 1:
        return (
          <PersonalStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <ContactStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <ProfessionalStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <MembershipStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 5:
        return (
          <EmergencyStep
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 6:
        return (
          <ReviewStep
            formData={formData}
          />
        );

      default:
        return null;

    }
  };

  return (

    <div className="wizard-container">

      <StepIndicator currentStep={step} />

      <div className="wizard-content">

        {renderStep()}

      </div>

      <WizardButtons
        step={step}
        nextStep={nextStep}
        previousStep={previousStep}
      />

    </div>

  );

}

export default MemberWizard;
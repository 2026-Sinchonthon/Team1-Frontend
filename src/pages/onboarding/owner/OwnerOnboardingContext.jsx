import { useState } from 'react';
import { INITIAL_OWNER_ONBOARDING_FORM_DATA, OwnerOnboardingContext } from './ownerOnboardingContextValue';

export function OwnerOnboardingProvider({ children }) {
  const [formData, setFormData] = useState(INITIAL_OWNER_ONBOARDING_FORM_DATA);

  const updateFormData = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

  const resetFormData = () => setFormData(INITIAL_OWNER_ONBOARDING_FORM_DATA);

  return (
    <OwnerOnboardingContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </OwnerOnboardingContext.Provider>
  );
}

import { useContext } from 'react';
import { OwnerOnboardingContext } from './ownerOnboardingContextValue';

export function useOwnerOnboarding() {
  const context = useContext(OwnerOnboardingContext);
  if (!context) {
    throw new Error('useOwnerOnboarding은 OwnerOnboardingProvider 내부에서만 사용할 수 있어요.');
  }
  return context;
}

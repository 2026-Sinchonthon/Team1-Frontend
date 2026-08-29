import { useContext } from 'react';
import { ReservationOnboardingContext } from './reservationOnboardingContextValue';

export function useReservationOnboarding() {
  const context = useContext(ReservationOnboardingContext);

  if (!context) {
    throw new Error(
      'useReservationOnboarding은 ReservationOnboardingProvider 내부에서만 사용할 수 있어요.',
    );
  }

  return context;
}

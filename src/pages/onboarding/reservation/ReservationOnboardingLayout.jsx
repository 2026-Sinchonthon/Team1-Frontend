import { useNavigate } from 'react-router-dom';
import OnboardingNextButton from '../../../components/onboarding/OnboardingNextButton';
import MobileLayout from '../../../layouts/MobileLayout';

const TOTAL_STEPS = 6;

function ReservationOnboardingLayout({ children, nextDisabled = false, step }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      navigate(`/onboarding/reservation/${step + 1}`);
    }
  };

  return (
    <MobileLayout>
      <section className="flex min-h-full flex-col px-6 py-6">
        <header className="shrink-0">
          <p className="text-sm text-gray-500">
            {step} / {TOTAL_STEPS}
          </p>
        </header>

        <div className="flex-1 py-8">{children}</div>

        <footer className="shrink-0 pb-3">
          <OnboardingNextButton
            disabled={nextDisabled || step === TOTAL_STEPS}
            onClick={handleNext}
          />
        </footer>
      </section>
    </MobileLayout>
  );
}

export default ReservationOnboardingLayout;

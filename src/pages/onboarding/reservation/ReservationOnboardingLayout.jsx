import { useNavigate } from 'react-router-dom';
import chevronLeft from '../../../assets/icons/chevron-left.svg';
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
      <section className="flex min-h-dvh flex-col overflow-hidden bg-white font-['Pretendard',sans-serif] sm:min-h-[844px]">
        <div className="h-0.5 w-full shrink-0 bg-[#f2f4f6]">
          <div
            className="h-full bg-[#3182f6] transition-[width] duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <header className="flex h-[68px] shrink-0 items-start pt-5">
          <button
            className="ml-4 flex size-10 items-center justify-center rounded-full"
            type="button"
            aria-label="이전 화면으로 이동"
            onClick={() => navigate(-1)}
          >
            <img className="size-6" src={chevronLeft} alt="" />
          </button>
        </header>

        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="h-[108px] shrink-0 px-6 pb-10 pt-3">
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

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chevronLeft from '../../../assets/icons/chevron-left.svg';
import OnboardingNextButton from '../../../components/onboarding/OnboardingNextButton';
import MobileLayout from '../../../layouts/MobileLayout';

const TOTAL_STEPS = 6;

function ReservationOnboardingLayout({
  children,
  nextDisabled = false,
  nextLabel = '다음',
  onNext,
  step,
}) {
  const navigate = useNavigate();
  const previousProgress = ((step - 1) / TOTAL_STEPS) * 100;
  const currentProgress = (step / TOTAL_STEPS) * 100;
  const [progress, setProgress] = useState(previousProgress);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setProgress(currentProgress);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [currentProgress]);

  const handleNext = () => {
    if (onNext) {
      onNext();
      return;
    }
    if (step < TOTAL_STEPS) {
      navigate(`/onboarding/reservation/${step + 1}`);
    }
  };

  return (
    <MobileLayout>
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-white font-['Pretendard',sans-serif]">
        <div className="h-0.5 w-full shrink-0 bg-[#f2f4f6]">
          <div
            className="h-full bg-[#3182f6] transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <header className="flex h-[68px] shrink-0 items-start pt-5">
          <button
            className="ml-4 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]"
            type="button"
            onClick={() => navigate(-1)}
          >
            <img className="size-6" src={chevronLeft} alt="" />
          </button>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">{children}</div>

        <footer className="h-[108px] shrink-0 px-6 pb-10 pt-3">
          <OnboardingNextButton
            disabled={nextDisabled || step === TOTAL_STEPS}
            label={nextLabel}
            onClick={handleNext}
          />
        </footer>
      </section>
    </MobileLayout>
  );
}

export default ReservationOnboardingLayout;

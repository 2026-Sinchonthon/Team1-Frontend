import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingNextButton from '../../../components/onboarding/OnboardingNextButton';
import MobileLayout from '../../../layouts/MobileLayout';

const TOTAL_STEPS = 4;

function OwnerOnboardingLayout({
  children,
  nextDisabled = false,
  nextLabel = '다음',
  onNext,
  step,
  title,
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

  const handleBack = () => {
    if (step > 1) {
      navigate(`/onboarding/owner/${step - 1}`);
    } else {
      navigate(-1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
      return;
    }
    if (step < TOTAL_STEPS) {
      navigate(`/onboarding/owner/${step + 1}`);
    }
  };

  return (
    <MobileLayout>
      <section className="flex min-h-dvh flex-col overflow-hidden bg-white font-['Pretendard',sans-serif] sm:min-h-[844px]">
        <div className="h-0.5 w-full shrink-0 bg-[#f2f4f6]">
          <div
            className="h-full bg-[#3182f6] transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <header className="flex h-[68px] shrink-0 items-start pt-5">
          <button
            aria-label="이전으로"
            className="ml-4 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6]"
            onClick={handleBack}
            type="button"
          >
            <img alt="" className="size-6" src="/icons/owner-onboarding/back.svg" />
          </button>
        </header>

        <h1 className="px-6 pb-6 pt-2 text-[22px] font-semibold leading-[33px] text-[#191f28]">
          {title}
        </h1>

        <div className="flex-1 px-6">{children}</div>

        <footer className="h-[108px] shrink-0 px-6 pb-10 pt-3">
          <OnboardingNextButton disabled={nextDisabled} label={nextLabel} onClick={handleNext} />
        </footer>
      </section>
    </MobileLayout>
  );
}

export default OwnerOnboardingLayout;

import { useNavigate } from 'react-router-dom';
import OnboardingNextButton from '../../../components/onboarding/OnboardingNextButton';

const TOTAL_STEPS = 5;

function OwnerOnboardingLayout({ children, nextDisabled = false, onNext, step, title }) {
  const navigate = useNavigate();

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
    <div className="flex flex-1 flex-col">
      <div className="pb-2 pl-4 pt-5">
        <button
          aria-label="이전으로"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#191f28] transition-colors hover:bg-[#f2f4f6]"
          onClick={handleBack}
          type="button"
        >
          <img alt="" className="size-6" src="/icons/owner-onboarding/back.svg" />
        </button>
      </div>

      <h1 className="px-6 pb-6 pt-2 font-['Pretendard',sans-serif] text-[22px] font-semibold leading-[33px] text-[#191f28]">
        {title}
      </h1>

      <div className="flex-1 px-6">{children}</div>

      <footer className="px-6 pb-3 pt-3">
        <OnboardingNextButton disabled={nextDisabled} onClick={handleNext} />
      </footer>
    </div>
  );
}

export default OwnerOnboardingLayout;

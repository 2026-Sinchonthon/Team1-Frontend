import { useNavigate } from 'react-router-dom';
import completionCheckIcon from '../../../assets/icons/completion-check.svg';
import OnboardingNextButton from '../../../components/onboarding/OnboardingNextButton';
import MobileLayout from '../../../layouts/MobileLayout';
import { useReservationOnboarding } from './useReservationOnboarding';

function ReservationOnboardingStep6() {
  const navigate = useNavigate();
  const { requestId } = useReservationOnboarding();

  return (
    <MobileLayout
      footer={
        <div className="h-[108px] px-6 pt-3">
          <OnboardingNextButton
            label="제안 확인하러 가기"
            onClick={() => navigate(`/proposals?requestId=${requestId}`)}
          />
        </div>
      }
    >
      <section className="flex h-full min-h-[684px] flex-col items-center justify-center px-6 font-['Pretendard',sans-serif]">
        <div className="flex size-20 items-center justify-center rounded-full bg-[#3182f6]">
          <img
            className="size-10"
            src={completionCheckIcon}
            alt=""
            aria-hidden="true"
          />
        </div>

        <h1 className="mt-6 text-center text-[22px] font-semibold leading-[33px] text-[#191f28]">
          제안 등록이 완료되었어요
        </h1>
        <p className="mt-3 text-center text-[15px] leading-[24.375px] text-[#8b95a1]">
          사장님들의 제안을 기다려주세요
        </p>
      </section>
    </MobileLayout>
  );
}

export default ReservationOnboardingStep6;

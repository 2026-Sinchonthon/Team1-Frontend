import OnboardingChoiceCard from '../../../components/onboarding/OnboardingChoiceCard';
import ReservationOnboardingLayout from './ReservationOnboardingLayout';
import { useReservationOnboarding } from './useReservationOnboarding';

const GROUP_TYPES = ['학생회', '동아리', '학과 회식', '기타'];

function ReservationOnboardingStep2() {
  const { formData, updateFormData } = useReservationOnboarding();
  const selectedType = formData.purpose;

  return (
    <ReservationOnboardingLayout
      step={2}
      nextDisabled={!selectedType}
    >
      <div className="px-6 pb-8 pt-5">
        <h1 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
          어떤 모임인가요?
        </h1>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6">
        {GROUP_TYPES.map((type) => (
          <OnboardingChoiceCard
            key={type}
            label={type}
            isSelected={selectedType === type}
            onClick={() => updateFormData({ purpose: type })}
          />
        ))}
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep2;

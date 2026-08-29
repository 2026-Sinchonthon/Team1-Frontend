import OnboardingTextInput from '../../../components/onboarding/OnboardingTextInput';
import OwnerOnboardingLayout from './OwnerOnboardingLayout';
import { useOwnerOnboarding } from './useOwnerOnboarding';

const SEATS_PER_TABLE = 4;

function OwnerOnboardingStep3() {
  const { formData, updateFormData } = useOwnerOnboarding();
  const { capacity } = formData;

  const tableCount = Math.floor(Number(capacity) / SEATS_PER_TABLE);

  const handleChange = (next) => {
    if (next === '' || /^\d+$/.test(next)) {
      updateFormData({ capacity: next });
    }
  };

  return (
    <OwnerOnboardingLayout
      nextDisabled={!capacity || Number(capacity) <= 0}
      step={3}
      title="최대 수용 인원을 알려주세요"
    >
      <OnboardingTextInput
        autoFocus
        onChange={handleChange}
        placeholder="60"
        size="lg"
        suffix="명"
        value={capacity}
      />

      {tableCount > 0 && (
        <div className="mt-3 flex items-center gap-1.5">
          <img alt="" className="size-[15px]" src="/icons/owner-onboarding/info.svg" />
          <p className="font-['Pretendard',sans-serif] text-[14px] leading-[21px] text-[#8b95a1]">
            {SEATS_PER_TABLE}인 테이블 기준 <span className="font-semibold text-[#4e5968]">{tableCount}개</span> 테이블을
            운영할 수 있어요
          </p>
        </div>
      )}
    </OwnerOnboardingLayout>
  );
}

export default OwnerOnboardingStep3;

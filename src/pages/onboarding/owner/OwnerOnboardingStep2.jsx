import OnboardingTextInput from '../../../components/onboarding/OnboardingTextInput';
import OwnerOnboardingLayout from './OwnerOnboardingLayout';
import { useOwnerOnboarding } from './useOwnerOnboarding';

function OwnerOnboardingStep2() {
  const { formData, updateFormData } = useOwnerOnboarding();

  return (
    <OwnerOnboardingLayout
      nextDisabled={!formData.address.trim()}
      step={2}
      title="가게 위치를 알려주세요"
    >
      <OnboardingTextInput
        autoFocus
        onChange={(value) => updateFormData({ address: value })}
        placeholder="서울 종로구 아 24"
        value={formData.address}
      />

      <div className="mt-4 flex gap-3 rounded-2xl bg-[#f2f4f6] p-4">
        <img alt="" className="mt-0.5 size-4 shrink-0" src="/icons/owner-onboarding/info.svg" />
        <p className="font-['Pretendard',sans-serif] text-[13px] leading-[21.125px] text-[#8b95a1]">
          도로명 주소 또는 동·구 이름으로 입력해주세요.
          <br />
          단체 손님에게 위치가 공개됩니다.
        </p>
      </div>
    </OwnerOnboardingLayout>
  );
}

export default OwnerOnboardingStep2;

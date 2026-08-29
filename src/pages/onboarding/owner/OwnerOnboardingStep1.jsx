import OnboardingTextInput from '../../../components/onboarding/OnboardingTextInput';
import OwnerOnboardingLayout from './OwnerOnboardingLayout';
import { useOwnerOnboarding } from './useOwnerOnboarding';

function OwnerOnboardingStep1() {
  const { formData, updateFormData } = useOwnerOnboarding();

  return (
    <OwnerOnboardingLayout
      nextDisabled={!formData.storeName.trim()}
      step={1}
      title="가게 이름을 알려주세요"
    >
      <OnboardingTextInput
        autoFocus
        onChange={(value) => updateFormData({ storeName: value })}
        placeholder="가게 이름을 입력해주세요"
        value={formData.storeName}
      />
    </OwnerOnboardingLayout>
  );
}

export default OwnerOnboardingStep1;

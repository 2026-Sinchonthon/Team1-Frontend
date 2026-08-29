import ReservationOnboardingLayout from './ReservationOnboardingLayout';
import { useReservationOnboarding } from './useReservationOnboarding';

function ReservationOnboardingStep1() {
  const { formData, updateFormData } = useReservationOnboarding();
  const { groupName } = formData;

  return (
    <ReservationOnboardingLayout
      step={1}
      nextDisabled={!groupName.trim()}
    >
      <div className="px-6 pb-8 pt-5">
        <h1 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
          단체명을 입력해주세요
        </h1>
      </div>

      <div className="flex-1 px-6">
        <label className="sr-only" htmlFor="group-name">
          단체명
        </label>
        <input
          id="group-name"
          className="h-14 w-full rounded-2xl bg-[#f2f4f6] px-4 pr-12 text-[17px] text-[#191f28] outline-none placeholder:text-[#8b95a1] focus:ring-2 focus:ring-[#3182f6]/20"
          type="text"
          value={groupName}
          placeholder="예: 컴퓨터공학과 학생회"
          autoComplete="organization"
          onChange={(event) => updateFormData({ groupName: event.target.value })}
        />
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep1;

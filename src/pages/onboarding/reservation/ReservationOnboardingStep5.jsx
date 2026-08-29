import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationOnboardingLayout from './ReservationOnboardingLayout';
import { useReservationOnboarding } from './useReservationOnboarding';

const BUDGET_OPTIONS = [
  { label: '50만원', value: 500000 },
  { label: '100만원', value: 1000000 },
  { label: '150만원', value: 1500000 },
];

function ReservationOnboardingStep5() {
  const navigate = useNavigate();
  const { formData, submitRequest, updateFormData } = useReservationOnboarding();
  const budget = formData.totalBudget;
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBudgetChange = (event) => {
    const digits = event.target.value.replace(/\D/g, '');
    updateFormData({ totalBudget: digits ? Number(digits) : 0 });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError('');
      await submitRequest();
      navigate('/onboarding/reservation/6');
    } catch (requestError) {
      const fieldErrors = Object.values(requestError.response?.data?.error ?? {});
      setError(
        fieldErrors.join(' ') ||
          requestError.response?.data?.message ||
          '예약 요청을 등록하지 못했습니다.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ReservationOnboardingLayout
      step={5}
      nextDisabled={!budget || isSubmitting}
      nextLabel={isSubmitting ? '등록 중...' : '다음'}
      onNext={handleSubmit}
    >
      <div className="px-6 pb-8 pt-5">
        <h1 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
          예산은 얼마인가요?
        </h1>
      </div>

      <div className="flex-1 px-6">
        <div className="flex h-14 items-center rounded-2xl bg-[#f2f4f6] px-4">
          <label className="sr-only" htmlFor="budget">예산</label>
          <input
            id="budget"
            className="min-w-0 flex-1 bg-transparent text-[22px] font-semibold leading-[33px] text-[#191f28] outline-none"
            type="text"
            inputMode="numeric"
            value={budget ? budget.toLocaleString('ko-KR') : ''}
            placeholder="0"
            onChange={handleBudgetChange}
          />
          <span className="shrink-0 text-[17px] font-medium leading-[25.5px] text-[#8b95a1]">원</span>
        </div>

        <div className="mt-4 flex h-[45px] gap-2">
          {BUDGET_OPTIONS.map((option) => {
            const isSelected = budget === option.value;
            return (
              <button key={option.value} className={`flex-1 rounded-2xl text-[14px] font-semibold leading-[21px] transition-colors ${isSelected ? 'bg-[#3182f6] text-white' : 'bg-[#f2f4f6] text-[#4e5968]'}`} type="button" aria-pressed={isSelected} onClick={() => updateFormData({ totalBudget: option.value })}>
                {option.label}
              </button>
            );
          })}
        </div>

        {error && <p className="pt-3 text-[13px] text-[#ff637e]">{error}</p>}
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep5;

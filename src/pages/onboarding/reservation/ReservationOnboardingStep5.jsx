import { useState } from 'react';
import ReservationOnboardingLayout from './ReservationOnboardingLayout';

const BUDGET_OPTIONS = [
  { label: '50만원', value: 500000 },
  { label: '100만원', value: 1000000 },
  { label: '150만원', value: 1500000 },
];

function ReservationOnboardingStep5() {
  const [budget, setBudget] = useState(1000000);

  const handleBudgetChange = (event) => {
    const digits = event.target.value.replace(/\D/g, '');
    setBudget(digits ? Number(digits) : 0);
  };

  return (
    <ReservationOnboardingLayout step={5} nextDisabled={!budget}>
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
              <button key={option.value} className={`flex-1 rounded-2xl text-[14px] font-semibold leading-[21px] transition-colors ${isSelected ? 'bg-[#3182f6] text-white' : 'bg-[#f2f4f6] text-[#4e5968]'}`} type="button" aria-pressed={isSelected} onClick={() => setBudget(option.value)}>
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep5;

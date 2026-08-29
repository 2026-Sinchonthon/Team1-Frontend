import { useState } from 'react';
import infoCircle from '../../../assets/icons/info-circle.svg';
import ReservationOnboardingLayout from './ReservationOnboardingLayout';

function ReservationOnboardingStep3() {
  const [guestCount, setGuestCount] = useState(0);
  const tableCount = guestCount ? Math.ceil(guestCount / 4) : 0;

  const handleGuestCountChange = (event) => {
    const digits = event.target.value.replace(/\D/g, '');
    setGuestCount(digits ? Number(digits) : 0);
  };

  return (
    <ReservationOnboardingLayout step={3} nextDisabled={!guestCount}>
      <div className="px-6 pb-8 pt-5">
        <h1 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
          몇 분이 오시나요?
        </h1>
      </div>

      <div className="flex-1 px-6">
        <div className="flex h-14 items-center rounded-2xl bg-[#f2f4f6] px-4">
          <label className="sr-only" htmlFor="guest-count">방문 인원</label>
          <input
            id="guest-count"
            className="min-w-0 flex-1 bg-transparent text-[22px] font-semibold leading-[33px] text-[#191f28] outline-none"
            type="text"
            inputMode="numeric"
            value={guestCount || ''}
            placeholder="0"
            onChange={handleGuestCountChange}
          />
          <span className="shrink-0 pl-1 text-[17px] font-medium leading-[25.5px] text-[#8b95a1]">명</span>
        </div>

        {guestCount > 0 && (
          <div className="flex items-center gap-1.5 pt-3 text-[14px] leading-[21px] text-[#8b95a1]">
            <img className="size-[15px] shrink-0" src={infoCircle} alt="" />
            <p>
              4인 테이블 기준 <strong className="font-semibold text-[#4e5968]">{tableCount}개</strong>{' '}
              테이블이 필요해요
            </p>
          </div>
        )}
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep3;

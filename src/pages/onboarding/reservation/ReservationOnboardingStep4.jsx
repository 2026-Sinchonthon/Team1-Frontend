import { useState } from 'react';
import Calendar from '../../../components/common/Calendar';
import ReservationOnboardingLayout from './ReservationOnboardingLayout';

const TIME_OPTIONS = [
  '17:00', '17:30', '18:00', '18:30', '19:00',
  '19:30', '20:00', '20:30', '21:00',
];
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function ReservationOnboardingStep4() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  return (
    <ReservationOnboardingLayout step={4} nextDisabled={!selectedDate || !selectedTime}>
      <div className="px-6 pb-4 pt-5">
        <h1 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
          언제 방문하시나요?
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6">
        <Calendar selectedDate={selectedDate} onSelect={handleDateSelect} />
        {selectedDate && (
          <section className="pb-2 pt-6">
            <h2 className="text-[15px] font-semibold leading-[22.5px] text-[#4e5968]">
              {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 ({WEEKDAYS[selectedDate.getDay()]}){' '}
              <span className="font-normal text-[#8b95a1]">· 시간 선택</span>
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {TIME_OPTIONS.map((time) => (
                <button key={time} className={`h-[37px] rounded-xl px-4 py-2 text-[14px] font-medium leading-[21px] transition-colors ${selectedTime === time ? 'bg-[#3182f6] text-white' : 'bg-[#f2f4f6] text-[#4e5968]'}`} type="button" aria-pressed={selectedTime === time} onClick={() => setSelectedTime(time)}>
                  {time}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </ReservationOnboardingLayout>
  );
}

export default ReservationOnboardingStep4;

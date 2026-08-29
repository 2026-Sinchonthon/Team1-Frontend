import { useState } from 'react';
import chevronLeft from '../../assets/icons/calendar-chevron-left.svg';
import chevronRight from '../../assets/icons/calendar-chevron-right.svg';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function OwnerReservationCalendar({ onSelectReservation, reservations }) {
  const initialMonth = reservations[0]
    ? new Date(reservations[0].year, reservations[0].month - 1, 1)
    : new Date();
  const [visibleMonth, setVisibleMonth] = useState(initialMonth);

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstWeekday + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const reservationsByDay = new Map(
    reservations
      .filter((reservation) => reservation.year === year && reservation.month === month + 1)
      .map((reservation) => [reservation.day, reservation]),
  );

  const moveMonth = (offset) => setVisibleMonth(new Date(year, month + offset, 1));

  return (
    <div className="w-full font-['Pretendard',sans-serif]">
      <div className="flex h-9 items-center justify-between">
        <button
          aria-label="이전 달"
          className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6]"
          onClick={() => moveMonth(-1)}
          type="button"
        >
          <img alt="" className="size-[18px]" src={chevronLeft} />
        </button>

        <strong className="text-[17px] font-semibold text-[#191f28]">
          {year}년 {month + 1}월
        </strong>

        <button
          aria-label="다음 달"
          className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6]"
          onClick={() => moveMonth(1)}
          type="button"
        >
          <img alt="" className="size-[18px]" src={chevronRight} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-7">
        {WEEKDAYS.map((weekday, index) => (
          <span
            key={weekday}
            className={`py-1.5 text-center text-[12px] font-medium ${
              index === 0 ? 'text-[#ff637e]' : index === 6 ? 'text-[#3182f6]' : 'text-[#8b95a1]'
            }`}
          >
            {weekday}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7">
        {cells.map((day, index) => {
          if (!day) {
            return <div className="h-[74px]" key={`empty-${index}`} />;
          }

          const reservation = reservationsByDay.get(day);

          return (
            <div className="flex flex-col items-center gap-0.5 pb-1.5" key={day}>
              {reservation ? (
                <button
                  className="flex flex-col items-center"
                  onClick={() => onSelectReservation(reservation)}
                  type="button"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#3182f6] text-[13px] font-medium text-white">
                    {day}
                  </span>
                  <span className="mt-0.5 rounded bg-[#ebf3fe] px-1 py-0.5 text-[10px] font-semibold leading-none text-[#3182f6]">
                    {reservation.groupName}
                  </span>
                  <span className="mt-0.5 text-[9px] leading-none text-[#8b95a1]">
                    {reservation.timeLabel} {reservation.headcount}명
                  </span>
                </button>
              ) : (
                <span className="flex size-9 items-center justify-center rounded-full text-[13px] font-medium text-[#191f28]">
                  {day}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OwnerReservationCalendar;

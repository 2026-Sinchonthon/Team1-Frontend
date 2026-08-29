import { useState } from 'react';
import chevronLeft from '../../assets/icons/calendar-chevron-left.svg';
import chevronRight from '../../assets/icons/calendar-chevron-right.svg';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

const toDateKey = (date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

function Calendar({ events = [], minDate = new Date(), onSelect, selectedDate }) {
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(minDate.getFullYear(), minDate.getMonth(), 1),
  );

  const minimumDate = new Date(
    minDate.getFullYear(),
    minDate.getMonth(),
    minDate.getDate(),
  );
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = index - firstWeekday + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  const moveMonth = (offset) => {
    setVisibleMonth(new Date(year, month + offset, 1));
    onSelect(null);
  };

  return (
    <div className="w-full font-['Pretendard',sans-serif]">
      <div className="flex h-9 items-center justify-between">
        <button
          className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]"
          type="button"
          onClick={() => moveMonth(-1)}
        >
          <img className="size-[18px]" src={chevronLeft} alt="" />
        </button>

        <strong className="text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
          {year}년 {month + 1}월
        </strong>

        <button
          className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]"
          type="button"
          onClick={() => moveMonth(1)}
        >
          <img className="size-[18px]" src={chevronRight} alt="" />
        </button>
      </div>

      <div className="mt-5 grid h-[34px] grid-cols-7">
        {WEEKDAYS.map((weekday, index) => (
          <span
            key={weekday}
            className={`py-2 text-center text-[12px] font-medium leading-[18px] ${
              index === 0
                ? 'text-[#ff637e]'
                : index === 6
                  ? 'text-[#3182f6]'
                  : 'text-[#8b95a1]'
            }`}
          >
            {weekday}
          </span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7">
        {cells.map((day, index) => {
          if (!day) {
            return <span key={`empty-${index}`} className="h-[42px]" />;
          }

          const date = new Date(year, month, day);
          const isDisabled = date < minimumDate;
          const isSelected = selectedDate
            && toDateKey(date) === toDateKey(selectedDate);
          const event = events.find(
            (calendarEvent) => toDateKey(calendarEvent.date) === toDateKey(date),
          );

          return (
            <div
              key={toDateKey(date)}
              className={`flex items-center justify-start py-[3px] ${event ? 'h-[75px] flex-col' : 'h-[42px] justify-center'}`}
            >
              <button
                className={`flex size-9 items-center justify-center rounded-full text-[13px] font-medium leading-[19.5px] ${
                  isSelected
                    ? 'bg-[#3182f6] text-white'
                    : isDisabled
                      ? 'cursor-not-allowed text-[#c5cad2]'
                      : 'text-[#191f28] hover:bg-[#f2f4f6]'
                }`}
                type="button"
                disabled={isDisabled}
                aria-pressed={isSelected}
                onClick={() => onSelect(date)}
              >
                {day}
              </button>

              {event && (
                <div className="mt-0.5 w-full min-w-0 px-0.5 text-center">
                  <p className="truncate rounded bg-[#ebf3fe] px-1 py-0.5 text-[10px] font-medium leading-[12.5px] text-[#3182f6]">
                    {event.label}
                  </p>
                  <p className="pt-0.5 text-[10px] leading-[15px] text-[#8b95a1]">
                    {event.time}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;

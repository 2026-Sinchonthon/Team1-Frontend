import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chevronRight from '../../assets/icons/chevron-right-small.svg';
import BottomNav from '../../components/common/BottomNav';
import Calendar from '../../components/common/Calendar';
import MobileLayout from '../../layouts/MobileLayout';
import { confirmedReservation } from '../../mocks/reservations';

function MyPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(confirmedReservation.date);
  const reservation = confirmedReservation;
  const isReservationDate = selectedDate
    && selectedDate.getFullYear() === reservation.date.getFullYear()
    && selectedDate.getMonth() === reservation.date.getMonth()
    && selectedDate.getDate() === reservation.date.getDate();
  const events = reservation
    ? [{ date: reservation.date, label: reservation.name, time: reservation.time }]
    : [];

  return (
    <MobileLayout
      footer={
        <>
          <div className="h-[76px] bg-white px-6 pt-3 font-['Pretendard',sans-serif]">
            <button className="h-12 w-full rounded-xl bg-[#f2f4f6] text-[15px] font-semibold leading-[22.5px] text-[#4e5968]" type="button">
              정보 수정하기
            </button>
          </div>
          <BottomNav />
        </>
      }
    >
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-white font-['Pretendard',sans-serif]">
        <header className="shrink-0 border-b border-[#f2f4f6] px-6 pb-4 pt-5 text-center">
          <h1 className="text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
            마이페이지
          </h1>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-5">
          <Calendar
            events={events}
            minDate={new Date(2026, 7, 1)}
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />

          <div className="pt-5">
            {isReservationDate ? (
              <button className="flex w-full items-center gap-3 rounded-2xl bg-[#f2f4f6] p-4 text-left" type="button" onClick={() => navigate(`/my/reservations/${reservation.id}`)}>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#ebf3fe] text-xl">
                  🍺
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block truncate text-[15px] font-semibold leading-[22.5px] text-[#191f28]">
                    {reservation.name}
                  </strong>
                  <span className="block truncate text-[13px] leading-[19.5px] text-[#8b95a1]">
                    {reservation.date.getMonth() + 1}월 {reservation.date.getDate()}일 {reservation.time} · {reservation.summaryGuests}명
                  </span>
                </span>
                <img className="size-4 shrink-0" src={chevronRight} alt="" />
              </button>
            ) : (
              <div className="rounded-2xl bg-[#f2f4f6] p-5 text-center">
                <strong className="block text-[15px] font-semibold leading-[22.5px] text-[#4e5968]">
                  확정된 예약이 없어요
                </strong>
                <p className="pt-1 text-[13px] leading-[19.5px] text-[#8b95a1]">
                  사장님 제안을 수락하면 여기에 표시돼요
                </p>
              </div>
            )}
          </div>
        </div>

      </section>
    </MobileLayout>
  );
}

export default MyPage;

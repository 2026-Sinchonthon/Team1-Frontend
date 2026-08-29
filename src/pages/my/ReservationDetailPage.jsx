import { useNavigate, useParams } from 'react-router-dom';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import BottomNav from '../../components/common/BottomNav';
import ReservationOrderCard from '../../components/my/ReservationOrderCard';
import MobileLayout from '../../layouts/MobileLayout';
import { reservations } from '../../mocks/reservations';

function ReservationDetailPage() {
  const navigate = useNavigate();
  const { reservationId } = useParams();
  const reservation = reservations.find(
    (item) => item.id === Number(reservationId),
  ) ?? reservations[0];

  return (
    <MobileLayout footer={<BottomNav />}>
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif]">
        <header className="flex h-[76px] shrink-0 items-center bg-white px-6 pb-4 pt-5">
          <button className="-ml-2 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]" type="button" onClick={() => navigate(-1)}>
            <img className="size-6" src={chevronLeft} alt="" />
          </button>
          <h1 className="flex-1 pr-8 text-center text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
            마이페이지
          </h1>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          <div className="flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#ebf3fe] text-2xl">
              {reservation.emoji}
            </span>
            <h2 className="text-[22px] font-semibold leading-[33px] text-[#191f28]">
              {reservation.name}
            </h2>
          </div>

          <p className="pt-3 text-[15px] leading-[22.5px] text-[#4e5968]">
            {reservation.dateLabel}
          </p>
          <p className="text-[15px] leading-[22.5px] text-[#4e5968]">
            {reservation.time} · {reservation.guests}명 예약 ({reservation.tableCount}테이블)
          </p>

          <div className="pt-4">
            <ReservationOrderCard reservation={reservation} />
          </div>
        </div>
      </section>
    </MobileLayout>
  );
}

export default ReservationDetailPage;

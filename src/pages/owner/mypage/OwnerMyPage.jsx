import { useNavigate } from 'react-router-dom';
import OwnerBottomNav from '../../../components/owner/OwnerBottomNav';
import OwnerReservationCalendar from '../../../components/owner/OwnerReservationCalendar';
import MobileLayout from '../../../layouts/MobileLayout';
import { MOCK_OWNER_RESERVATIONS } from '../../../mocks/ownerReservations';

function OwnerMyPage() {
  const navigate = useNavigate();

  const goToDetail = (reservation) => navigate(`/owner/mypage/${reservation.id}`);

  return (
    <MobileLayout>
      <section className="flex min-h-dvh flex-col overflow-hidden bg-white font-['Pretendard',sans-serif] sm:min-h-[844px]">
        <div className="shrink-0 border-b border-[#f2f4f6] px-6 pb-4 pt-[72px]">
          <p className="text-center text-[17px] font-semibold text-[#191f28]">마이페이지</p>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-5">
          <OwnerReservationCalendar
            onSelectReservation={goToDetail}
            reservations={MOCK_OWNER_RESERVATIONS}
          />

          <div className="flex flex-col gap-2 py-4">
            {MOCK_OWNER_RESERVATIONS.map((reservation) => (
              <button
                key={reservation.id}
                className="flex items-center gap-3 rounded-2xl bg-[#f2f4f6] p-4 text-left"
                onClick={() => goToDetail(reservation)}
                type="button"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl text-[20px]"
                  style={{ backgroundColor: reservation.emojiBg }}
                >
                  {reservation.emoji}
                </span>
                <span className="flex flex-1 flex-col">
                  <strong className="text-[15px] font-semibold text-[#191f28]">
                    {reservation.groupName}
                  </strong>
                  <span className="text-[13px] text-[#8b95a1]">
                    9월 {reservation.day}일 {reservation.timeLabel} · {reservation.headcount}명
                  </span>
                </span>
                <img alt="" className="size-4 shrink-0" src="/icons/owner-mypage/chevron-right.svg" />
              </button>
            ))}
          </div>
        </div>

        <div className="shrink-0 px-6 pb-3 pt-3">
          <button
            className="h-12 w-full rounded-xl bg-[#f2f4f6] text-[15px] font-semibold text-[#4e5968] transition-colors hover:bg-[#e5e8eb]"
            type="button"
          >
            가게 정보 수정하기
          </button>
        </div>

        <OwnerBottomNav />
      </section>
    </MobileLayout>
  );
}

export default OwnerMyPage;

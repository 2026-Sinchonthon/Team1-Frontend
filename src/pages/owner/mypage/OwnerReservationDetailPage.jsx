import { Navigate, useParams } from 'react-router-dom';
import OwnerBottomNav from '../../../components/owner/OwnerBottomNav';
import ProposalHeader from '../../../components/owner/ProposalHeader';
import MobileLayout from '../../../layouts/MobileLayout';
import { MOCK_OWNER_RESERVATIONS } from '../../../mocks/ownerReservations';

function OwnerReservationDetailPage() {
  const { reservationId } = useParams();
  const reservation = MOCK_OWNER_RESERVATIONS.find((item) => item.id === reservationId);

  if (!reservation) {
    return <Navigate to="/owner/mypage" replace />;
  }

  return (
    <MobileLayout>
      <section className="flex h-full flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif]">
        <ProposalHeader title="마이페이지" />

        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-[24px]"
              style={{ backgroundColor: reservation.emojiBg }}
            >
              {reservation.emoji}
            </span>
            <strong className="text-[22px] font-semibold text-[#191f28]">
              {reservation.groupName}
            </strong>
          </div>

          <p className="mt-3 text-[15px] text-[#4e5968]">
            {reservation.year}년 {reservation.month}월 {reservation.day}일 {reservation.weekdayLabel}
          </p>
          <p className="text-[15px] text-[#4e5968]">
            오후 {reservation.timeLabel} · {reservation.headcount}명 예약 ({reservation.tableCount}
            테이블)
          </p>

          <div className="mt-4 rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
            <div className="px-5 pb-4 pt-5">
              <p className="text-[13px] font-semibold text-[#8b95a1]">
                기본 안주 주문 내역 (4인 테이블 기준)
              </p>

              <div className="mt-4 flex flex-col">
                {reservation.orderItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-[#f2f4f6] py-3"
                  >
                    <span className="text-[15px] text-[#191f28]">{item.name}</span>
                    <span className="flex items-center gap-4">
                      <span className="text-[14px] text-[#4e5968]">{item.price}</span>
                      <span className="whitespace-nowrap text-right text-[13px] text-[#8b95a1]">
                        {item.qty}
                      </span>
                    </span>
                  </div>
                ))}

                {reservation.freeServiceItem && (
                  <div className="flex items-center border-b border-[#f2f4f6] py-3">
                    <span className="text-[14px] font-medium text-[#3182f6]">
                      {reservation.freeServiceItem}
                    </span>
                    <span className="ml-2 rounded-full bg-[#ebf3fe] px-2 py-0.5 text-[12px] text-[#3182f6]">
                      무료
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-[#191f28]">총금액</span>
                <span className="text-[18px] font-semibold text-[#3182f6]">
                  {reservation.totalAmount}
                </span>
              </div>
            </div>

            <div className="h-px bg-[#f2f4f6]" />

            <div className="px-5 py-4">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#3182f6] text-[15px] font-semibold text-[#3182f6] transition-colors hover:bg-[#ebf3fe]"
                href={`tel:${reservation.phone}`}
              >
                <img alt="" className="size-[18px]" src="/icons/owner-mypage/phone.svg" />
                예약자에게 전화하기
              </a>
            </div>
          </div>
        </div>

        <OwnerBottomNav />
      </section>
    </MobileLayout>
  );
}

export default OwnerReservationDetailPage;

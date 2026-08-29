import confirmedIcon from '../../assets/icons/reservation-confirmed.svg';

const formatPrice = (price) => `${price.toLocaleString('ko-KR')}원`;

function ReservationConfirmationCard({ proposal, request }) {
  const details = [
    ['단체명', request.groupName],
    ['인원', `${request.guests}명 (${request.tableCount}테이블)`],
    ['방문 일시', request.dateTime],
  ];

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 bg-[#3182f6] px-5 py-4">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20">
          <img className="size-4" src={confirmedIcon} alt="" />
        </span>
        <div>
          <p className="text-[13px] font-medium leading-[19.5px] text-white/80">예약 확정</p>
          <h2 className="text-[15px] font-semibold leading-[22.5px] text-white">
            {proposal.storeName}
          </h2>
        </div>
      </div>

      <div className="px-5 py-4">
        {details.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-[#f2f4f6] py-3 first:pt-0">
            <span className="text-[13px] leading-[19.5px] text-[#8b95a1]">{label}</span>
            <strong className="text-[14px] font-semibold leading-[21px] text-[#191f28]">{value}</strong>
          </div>
        ))}

        <div className="flex items-center justify-between pt-3">
          <span className="text-[13px] leading-[19.5px] text-[#8b95a1]">예상 총 금액</span>
          <strong className="text-[15px] font-semibold leading-[22.5px] text-[#3182f6]">
            {formatPrice(proposal.totalPrice)}
          </strong>
        </div>

        <p className="mt-3 rounded-xl bg-[#ebf3fe] p-3 text-[12px] leading-[19.5px] text-[#3182f6]">
          사장님께 예약 요청이 전송되었어요. 확정 여부는 24시간 내 알림으로 안내드려요.
        </p>
      </div>
    </section>
  );
}

export default ReservationConfirmationCard;

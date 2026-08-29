import phoneIcon from '../../assets/icons/phone.svg';

const formatPrice = (price) => `${price.toLocaleString('ko-KR')}원`;

function ReservationOrderCard({ reservation }) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="px-5 pb-4 pt-5">
        <h2 className="text-[13px] font-semibold leading-[19.5px] text-[#8b95a1]">
          기본 안주 주문 내역 (4인 테이블 기준)
        </h2>

        <div className="pt-4">
          {reservation.orderItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-[#f2f4f6] py-3">
              <span className="text-[15px] leading-[22.5px] text-[#191f28]">
                {item.name}
              </span>
              <span className="flex items-center gap-4">
                <span className="text-[14px] leading-[21px] text-[#4e5968]">
                  {formatPrice(item.price)}
                </span>
                <span className="w-8 text-right text-[13px] leading-[19.5px] text-[#8b95a1]">
                  {item.quantity}개
                </span>
              </span>
            </div>
          ))}

          <div className="flex items-center border-b border-[#f2f4f6] py-3">
            <span className="text-[14px] font-medium leading-[21px] text-[#3182f6]">
              서비스 메뉴 {reservation.serviceItem}
            </span>
            <span className="ml-2 rounded-full bg-[#ebf3fe] px-2 py-0.5 text-[12px] leading-[18px] text-[#3182f6]">
              무료
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <strong className="text-[15px] font-semibold leading-[22.5px] text-[#191f28]">
            총금액
          </strong>
          <strong className="text-[18px] font-semibold leading-[27px] text-[#3182f6]">
            {formatPrice(reservation.totalPrice)}
          </strong>
        </div>
      </div>

      <div className="border-t border-[#f2f4f6] px-5 py-4">
        <button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-[#3182f6] text-[15px] font-semibold leading-[22.5px] text-[#3182f6]"
          type="button"
        >
          <img className="size-[18px]" src={phoneIcon} alt="" />
          사장님에게 전화하기
        </button>
      </div>
    </section>
  );
}

export default ReservationOrderCard;

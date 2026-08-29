import { useState } from 'react';
import acceptCheck from '../../assets/icons/accept-check.svg';
import chevronDown from '../../assets/icons/chevron-down.svg';
import AiMenuRecommendation from './AiMenuRecommendation';

const formatPrice = (price) => `${price.toLocaleString('ko-KR')}원`;

function ProposalDetailCard({ proposal, tableCount, onAccepted }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="px-5 pb-4 pt-5">
        <h2 className="text-[13px] font-semibold leading-[19.5px] text-[#3182f6]">
          사장님 메시지
        </h2>
        <p className="pt-2 text-[14px] leading-[22.75px] text-[#4e5968]">
          {proposal.message}
        </p>
      </div>

      <div className="mx-5 border-t border-[#f2f4f6]" />

      <div className="flex h-20 items-center justify-between px-5 py-4">
        <div>
          <p className="text-[12px] leading-[18px] text-[#8b95a1]">테이블당 예산</p>
          <strong className="block pt-1 text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
            {formatPrice(proposal.pricePerTable)}
          </strong>
        </div>
        <div className="text-right">
          <p className="text-[12px] leading-[18px] text-[#8b95a1]">예상 총액 ({tableCount}테이블)</p>
          <strong className="block pt-1 text-[15px] font-semibold leading-[22.5px] text-[#3182f6]">
            {formatPrice(proposal.totalPrice)}
          </strong>
        </div>
      </div>

      <div className="mx-5 border-t border-[#f2f4f6]" />

      <div className="p-5">
        <button
          className="flex h-12 w-full items-center justify-between rounded-xl bg-[#f2f4f6] px-4 text-[15px] font-semibold leading-[22.5px] text-[#4e5968]"
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
        >
          AI 안주 조합 추천
          <img className={`size-[18px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} src={chevronDown} alt="" />
        </button>

        {isExpanded && (
          <div className="flex flex-col gap-3 py-3">
            {proposal.recommendations.map((recommendation) => (
              <AiMenuRecommendation key={recommendation.id} recommendation={recommendation} />
            ))}
          </div>
        )}

        <button
          className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[15px] font-semibold leading-[22.5px] ${isExpanded ? '' : 'mt-3'} ${isAccepted ? 'bg-[#f2f4f6] text-[#4e5968]' : 'bg-[#3182f6] text-white'}`}
          type="button"
          disabled={isAccepted}
          onClick={() => {
            setIsAccepted(true);
            onAccepted?.();
          }}
        >
          {isAccepted && (
            <span className="flex size-5 items-center justify-center rounded-full bg-[#3182f6]">
              <img className="size-[11px]" src={acceptCheck} alt="" />
            </span>
          )}
          {isAccepted ? '수락 완료' : '제안 수락하기'}
        </button>
      </div>
    </section>
  );
}

export default ProposalDetailCard;

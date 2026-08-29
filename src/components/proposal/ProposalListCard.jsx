import chevronRight from '../../assets/icons/chevron-right-small.svg';

function ProposalListCard({ proposal, onClick }) {
  return (
    <button
      className="flex w-full items-center gap-5 rounded-2xl bg-white p-5 text-left shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-transform active:scale-[0.99]"
      type="button"
      onClick={onClick}
    >
      <span
        className="flex size-[68px] shrink-0 items-center justify-center rounded-full text-[30px] leading-[45px]"
        style={{ backgroundColor: proposal.emojiBackground }}
      >
        {proposal.emoji}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] leading-[19.5px] text-[#8b95a1]">
          {proposal.storeName} | {proposal.address}
        </span>
        <strong className="block pt-1.5 text-[18px] font-semibold leading-[27px] text-[#191f28]">
          {proposal.preview}
        </strong>
      </span>

      <img className="size-[18px] shrink-0" src={chevronRight} alt="" />
    </button>
  );
}

export default ProposalListCard;

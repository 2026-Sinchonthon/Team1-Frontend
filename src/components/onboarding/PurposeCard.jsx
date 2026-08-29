function PurposeCard({ description, emoji, isSelected = false, onClick, title }) {
  return (
    <button
      className={`w-full rounded-2xl border-2 p-5 text-left font-['Pretendard',sans-serif] transition-colors focus-visible:outline-none ${
        isSelected
          ? 'border-[#3182f6] bg-[#edf6ff]'
          : 'border-transparent bg-[#f2f4f6] hover:bg-[#e5e8eb] active:bg-[#dfe3e7]'
      }`}
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
    >
      <span className="block text-[32px] leading-[48px]" aria-hidden="true">
        {emoji}
      </span>
      <strong className="mt-3 block text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
        {title}
      </strong>
      <span className="mt-1 block text-[14px] font-normal leading-[22.75px] text-[#8b95a1]">
        {description}
      </span>
    </button>
  );
}

export default PurposeCard;

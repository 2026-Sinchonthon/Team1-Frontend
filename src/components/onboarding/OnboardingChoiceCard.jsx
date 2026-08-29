function OnboardingChoiceCard({ isSelected, label, onClick }) {
  return (
    <button
      className={`flex h-[65px] w-full items-center rounded-2xl border-2 px-5 text-left font-['Pretendard',sans-serif] text-[17px] font-medium leading-[25.5px] text-[#191f28] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3182f6]/20 ${
        isSelected
          ? 'border-[#3182f6] bg-[#edf6ff]'
          : 'border-transparent bg-[#f2f4f6] hover:bg-[#e5e8eb]'
      }`}
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default OnboardingChoiceCard;

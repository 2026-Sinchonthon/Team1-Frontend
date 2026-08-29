function OnboardingNextButton({ disabled = false, onClick }) {
  return (
    <button
      className="h-14 w-full rounded-2xl bg-[#3182f6] font-['Pretendard',sans-serif] text-[17px] font-semibold leading-[25.5px] text-white transition-[background,transform] duration-150 active:scale-[0.99] active:bg-gradient-to-r active:from-[#3182f6] active:to-[#6aa7ff] disabled:cursor-not-allowed disabled:bg-[#f2f4f6] disabled:text-[#8b95a1] disabled:active:scale-100"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      다음
    </button>
  );
}

export default OnboardingNextButton;

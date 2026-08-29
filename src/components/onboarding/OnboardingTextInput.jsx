function OnboardingTextInput({
  autoFocus = false,
  onChange,
  placeholder,
  size = 'md',
  suffix,
  type = 'text',
  value,
}) {
  const isLarge = size === 'lg';

  return (
    <div className="relative">
      <input
        autoFocus={autoFocus}
        className={`h-14 w-full rounded-2xl bg-[#f2f4f6] pl-4 ${
          suffix ? 'pr-12' : 'pr-12'
        } font-['Pretendard',sans-serif] ${
          isLarge ? 'text-[22px] font-semibold' : 'text-[17px] font-normal'
        } text-[#191f28] placeholder:font-normal placeholder:text-[#8b95a1] focus:outline-none`}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />

      {suffix && (
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] text-[17px] font-medium text-[#8b95a1]">
          {suffix}
        </span>
      )}

      {!suffix && value && (
        <button
          aria-label="입력 지우기"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => onChange('')}
          type="button"
        >
          <img alt="" className="size-5" src="/icons/owner-onboarding/clear.svg" />
        </button>
      )}
    </div>
  );
}

export default OnboardingTextInput;

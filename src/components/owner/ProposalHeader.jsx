import { useNavigate } from 'react-router-dom';

function ProposalHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className="flex shrink-0 items-center bg-white px-6 pb-4 pt-[72px]">
      <button
        aria-label="이전으로"
        className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6]"
        onClick={() => navigate(-1)}
        type="button"
      >
        <img alt="" className="size-6" src="/icons/owner-onboarding/back.svg" />
      </button>

      <p className="flex-1 text-center font-['Pretendard',sans-serif] text-[17px] font-semibold text-[#191f28]">
        {title}
      </p>

      <div className="size-10 shrink-0" />
    </div>
  );
}

export default ProposalHeader;

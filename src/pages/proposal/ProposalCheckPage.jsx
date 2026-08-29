import { useNavigate } from 'react-router-dom';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import BottomNav from '../../components/common/BottomNav';
import ProposalListCard from '../../components/proposal/ProposalListCard';
import MobileLayout from '../../layouts/MobileLayout';
import { proposalRequest, proposals } from '../../mocks/proposals';

function ProposalCheckPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout footer={<BottomNav />}>
      <section className="flex min-h-[calc(100dvh-127px)] flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif] sm:min-h-[717px]">
        <div className="shrink-0 bg-white">
          <header className="flex items-center px-6 pb-4 pt-5">
            <button
              className="-ml-2 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]"
              type="button"
              onClick={() => navigate(-1)}
            >
              <img className="size-6" src={chevronLeft} alt="" />
            </button>
            <h1 className="flex-1 pr-8 text-center text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
              사장님 제안 확인하기
            </h1>
          </header>

          <div className="px-6 pb-4">
            <div className="flex items-center gap-2 rounded-2xl bg-[#f2f4f6] p-3.5 text-[13px] leading-[19.5px] text-[#8b95a1]">
              <strong className="font-semibold text-[#4e5968]">{proposalRequest.groupName}</strong>
              <span>·</span>
              <span>{proposalRequest.guests}명</span>
              <span>·</span>
              <span>{proposalRequest.dateTime}</span>
              <span>·</span>
              <span>{proposalRequest.tableCount}테이블</span>
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-4">
          <p className="py-3 text-[14px] font-semibold leading-[21px] text-[#4e5968]">
            총 <span className="text-[#3182f6]">{proposals.length}개</span> 제안이 왔어요
          </p>

          <div className="flex flex-col gap-3">
            {proposals.map((proposal) => (
              <ProposalListCard
                key={proposal.id}
                proposal={proposal}
                onClick={() => navigate(`/proposals/${proposal.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </MobileLayout>
  );
}

export default ProposalCheckPage;

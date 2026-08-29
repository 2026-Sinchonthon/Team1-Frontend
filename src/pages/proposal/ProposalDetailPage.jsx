import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import BottomNav from '../../components/common/BottomNav';
import ProposalDetailCard from '../../components/proposal/ProposalDetailCard';
import ReservationConfirmationCard from '../../components/proposal/ReservationConfirmationCard';
import MobileLayout from '../../layouts/MobileLayout';
import { proposalRequest, proposals } from '../../mocks/proposals';

function ProposalDetailPage() {
  const navigate = useNavigate();
  const { proposalId } = useParams();
  const [isAccepted, setIsAccepted] = useState(false);
  const selectedProposal = proposals.find((item) => item.id === Number(proposalId));
  const proposal = { ...proposals[0], ...selectedProposal };

  return (
    <MobileLayout footer={<BottomNav />}>
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif]">
        <header className="flex shrink-0 items-center bg-white px-6 pb-4 pt-5">
          <button
            className="-ml-2 flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#f2f4f6] active:bg-[#e5e8eb]"
            type="button"
            onClick={() => navigate(-1)}
          >
            <img className="size-6" src={chevronLeft} alt="" />
          </button>
          <h1 className="flex-1 truncate pr-8 text-center text-[17px] font-semibold leading-[25.5px] text-[#191f28]">
            {proposal.storeName}
          </h1>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span
                className="mt-1 flex size-14 shrink-0 items-center justify-center rounded-2xl text-[28px] leading-[42px]"
                style={{ backgroundColor: proposal.emojiBackground }}
              >
                {proposal.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <ProposalDetailCard
                  proposal={proposal}
                  tableCount={proposalRequest.tableCount}
                  onAccepted={() => setIsAccepted(true)}
                />
              </div>
            </div>

            {isAccepted && (
              <ReservationConfirmationCard proposal={proposal} request={proposalRequest} />
            )}
          </div>
        </div>
      </section>
    </MobileLayout>
  );
}

export default ProposalDetailPage;

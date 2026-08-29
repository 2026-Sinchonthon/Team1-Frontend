import { useNavigate } from 'react-router-dom';
import OwnerBottomNav from '../../../components/owner/OwnerBottomNav';
import ProposalHeader from '../../../components/owner/ProposalHeader';
import MobileLayout from '../../../layouts/MobileLayout';
import { useOwnerProposal } from './useOwnerProposal';

function ProposalCheckPage() {
  const navigate = useNavigate();
  const { proposals, requests } = useOwnerProposal();

  return (
    <MobileLayout>
      <section className="flex min-h-dvh flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif] sm:min-h-[844px]">
        <ProposalHeader title="단체 예약 확인하기" />

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-4">
          {requests.map((request) => {
            const isProposed = Boolean(proposals[request.id]);

            return (
              <button
                key={request.id}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 text-left shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06)]"
                onClick={() => navigate(`/owner/proposal/${request.id}`)}
                type="button"
              >
                <span
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-[28px]"
                  style={{ backgroundColor: request.emojiBg }}
                >
                  {request.emoji}
                </span>

                <span className="flex flex-1 flex-col">
                  <span className="flex items-center justify-between">
                    <strong className="text-[17px] font-semibold text-[#191f28]">
                      {request.groupName}
                    </strong>
                    {isProposed ? (
                      <span className="rounded-full bg-[#ebf3fe] px-2 py-0.5 text-[12px] font-semibold text-[#3182f6]">
                        제안 완료
                      </span>
                    ) : (
                      <span className="rounded-full bg-[#fff0eb] px-2 py-0.5 text-[12px] font-semibold text-[#ff6b35]">
                        {request.dDay}
                      </span>
                    )}
                  </span>

                  <span className="mt-1.5 block text-[13px] text-[#8b95a1]">
                    {request.dateShort} · 40명
                  </span>

                  <span className="mt-2 flex gap-1.5">
                    <span className="rounded-full bg-[#f2f4f6] px-2 py-0.5 text-[12px] text-[#4e5968]">
                      {request.purposeTag}
                    </span>
                    <span className="rounded-full bg-[#f2f4f6] px-2 py-0.5 text-[12px] text-[#4e5968]">
                      {request.budgetPerTableLabel}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <OwnerBottomNav />
      </section>
    </MobileLayout>
  );
}

export default ProposalCheckPage;

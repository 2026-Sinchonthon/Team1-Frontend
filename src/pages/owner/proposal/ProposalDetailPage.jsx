import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ProposalHeader from '../../../components/owner/ProposalHeader';
import MobileLayout from '../../../layouts/MobileLayout';
import { useOwnerProposal } from './useOwnerProposal';

const DETAIL_ROWS = [
  { key: 'groupName', label: '단체명' },
  { key: 'visitDateFull', label: '방문 일시' },
  { key: 'purpose', label: '목적' },
  { key: 'headcountLabel', label: '방문 인원' },
  { key: 'budgetPerTable', label: '테이블당 예산' },
  { key: 'totalBudget', label: '총 예산' },
];

function ProposalDetailPage() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const { getRequest } = useOwnerProposal();
  const request = getRequest(requestId);

  if (!request) {
    return <Navigate to="/owner/proposal" replace />;
  }

  return (
    <MobileLayout>
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif]">
        <ProposalHeader title={request.groupName} />

        <div className="flex flex-1 gap-3 px-6 py-5">
          <div className="flex shrink-0 flex-col items-center gap-2 pt-1">
            <span
              className="flex size-14 items-center justify-center rounded-2xl text-[26px]"
              style={{ backgroundColor: request.emojiBg }}
            >
              {request.emoji}
            </span>
            <span className="text-center">
              <span className="block text-[10px] font-medium text-[#8b95a1]">방문까지</span>
              <span className="block text-[18px] font-semibold text-[#ff6b35]">
                {request.dDay}
              </span>
            </span>
          </div>

          <div className="flex flex-1 flex-col rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
            <div className="px-5 pb-2 pt-5">
              <p className="text-[12px] font-semibold tracking-[0.3px] text-[#3182f6]">
                예약 요청 내용
              </p>

              <div className="mt-3 flex flex-col">
                {DETAIL_ROWS.map((row) => (
                  <div key={row.key} className="flex items-start justify-between py-2.5">
                    <span className="text-[13px] text-[#8b95a1]">{row.label}</span>
                    <span className="text-right text-[13px] font-semibold text-[#191f28]">
                      {request[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-5">
              <div className="h-px bg-[#f2f4f6]" />
            </div>

            <div className="px-5 py-3">
              <button
                className="h-11 w-full rounded-xl bg-[#3182f6] text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[0.99]"
                onClick={() => navigate(`/owner/proposal/${request.id}/new`)}
                type="button"
              >
                제안 작성하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </MobileLayout>
  );
}

export default ProposalDetailPage;

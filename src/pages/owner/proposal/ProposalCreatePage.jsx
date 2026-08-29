import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import OwnerBottomNav from '../../../components/owner/OwnerBottomNav';
import ProposalHeader from '../../../components/owner/ProposalHeader';
import MobileLayout from '../../../layouts/MobileLayout';
import { useOwnerProposal } from './useOwnerProposal';

const SUMMARY_ROWS = [
  { key: 'groupName', label: '단체명' },
  { key: 'visitDateShort', label: '방문 일시' },
  { key: 'headcountLabel', label: '방문 인원' },
  { key: 'purpose', label: '목적' },
  { key: 'budgetPerTable', label: '테이블당 예산' },
];

function ProposalCreatePage() {
  const { requestId } = useParams();
  const { getRequest, proposals, submitProposal } = useOwnerProposal();
  const request = getRequest(requestId);

  const [message, setMessage] = useState('');
  const [discountRate, setDiscountRate] = useState('');

  if (!request) {
    return <Navigate to="/owner/proposal" replace />;
  }

  const submittedProposal = proposals[request.id];
  const nextDisabled = !message.trim() || discountRate === '';

  const handleSubmit = () => {
    if (nextDisabled) return;
    submitProposal(request.id, { discountRate, message });
  };

  return (
    <MobileLayout>
      <section className="flex h-full min-h-0 flex-col overflow-hidden bg-[#f2f4f6] font-['Pretendard',sans-serif]">
        <ProposalHeader title={request.groupName} />

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5">
          {submittedProposal ? (
            <>
              <div className="flex gap-3">
                <div className="flex shrink-0 flex-col items-center gap-2 pt-1">
                  <span
                    className="flex size-14 items-center justify-center rounded-2xl text-[26px]"
                    style={{ backgroundColor: request.emojiBg }}
                  >
                    {request.emoji}
                  </span>
                  <span className="text-center">
                    <span className="block text-[10px] font-medium text-[#8b95a1]">
                      방문까지
                    </span>
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
                      {[...SUMMARY_ROWS, { key: 'totalBudget', label: '총 예산' }].map((row) => (
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
                    <div className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#f2f4f6]">
                      <span className="flex size-5 items-center justify-center rounded-full bg-[#3182f6]">
                        <img alt="" className="size-[11px]" src="/icons/owner-onboarding/check.svg" />
                      </span>
                      <span className="text-[14px] font-semibold text-[#4e5968]">
                        제안 전송 완료
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 border-b border-[#f2f4f6] px-5 pb-2 pt-4">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#3182f6]">
                    <img alt="" className="size-[11px]" src="/icons/owner-onboarding/check.svg" />
                  </span>
                  <p className="text-[13px] font-semibold text-[#3182f6]">전송된 제안 내용</p>
                </div>
                <div className="px-5 py-4">
                  <p className="whitespace-pre-line text-[14px] leading-[22.75px] text-[#4e5968]">
                    {submittedProposal.message}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[12px] text-[#8b95a1]">할인율</span>
                    <span className="text-[14px] font-semibold text-[#3182f6]">
                      {submittedProposal.discountRate}%
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
                <div className="px-5 py-4">
                  <p className="text-[12px] font-semibold tracking-[0.3px] text-[#8b95a1]">
                    예약 내용
                  </p>
                  <div className="mt-3 flex flex-col">
                    {SUMMARY_ROWS.map((row) => (
                      <div key={row.key} className="flex items-start justify-between py-2.5">
                        <span className="text-[13px] text-[#8b95a1]">{row.label}</span>
                        <span className="text-right text-[13px] font-semibold text-[#191f28]">
                          {request[row.key]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
                <div className="px-5 py-4">
                  <p className="pb-3 text-[13px] font-semibold text-[#4e5968]">제안 작성 칸</p>
                  <textarea
                    className="h-[115px] w-full resize-none rounded-xl bg-[#f2f4f6] p-4 text-[14px] leading-[22.75px] text-[#191f28] placeholder:text-[#c5cad2] focus:outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="단체 손님께 드릴 제안 내용을 자유롭게 입력해주세요. (예: 저희 가게는 단체석 별도 운영으로 프라이빗한 술자리 가능합니다)"
                    value={message}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)]">
                <div className="px-5 py-4">
                  <p className="text-[13px] font-semibold text-[#4e5968]">할인율</p>
                  <p className="mt-1 text-[12px] text-[#3182f6]">
                    *할인을 제공하는 경우 매칭 확률이 올라갑니다
                  </p>
                  <div className="mt-3 flex h-13 items-center gap-2 rounded-xl bg-[#f2f4f6] px-4">
                    <input
                      className="min-w-0 flex-1 bg-transparent text-[22px] font-semibold text-[#191f28] outline-none placeholder:text-[rgba(25,31,40,0.5)]"
                      inputMode="numeric"
                      onChange={(e) => {
                        const next = e.target.value;
                        if (next === '' || /^\d{1,3}$/.test(next)) setDiscountRate(next);
                      }}
                      placeholder="0"
                      value={discountRate}
                    />
                    <span className="text-[20px] font-semibold text-[#8b95a1]">%</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {submittedProposal ? (
          <OwnerBottomNav />
        ) : (
          <footer className="shrink-0 px-6 pb-10 pt-3">
            <button
              className="h-14 w-full rounded-2xl bg-[#3182f6] text-[17px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-[#f2f4f6] disabled:text-[#8b95a1]"
              disabled={nextDisabled}
              onClick={handleSubmit}
              type="button"
            >
              제안 전송하기
            </button>
          </footer>
        )}
      </section>
    </MobileLayout>
  );
}

export default ProposalCreatePage;

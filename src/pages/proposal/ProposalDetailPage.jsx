import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import BottomNav from '../../components/common/BottomNav';
import ProposalDetailCard from '../../components/proposal/ProposalDetailCard';
import ReservationConfirmationCard from '../../components/proposal/ReservationConfirmationCard';
import MobileLayout from '../../layouts/MobileLayout';
import { proposalRequest } from '../../mocks/proposals';
import { acceptOffer } from '../../apis/offers';
import { getRequestId, useOffers } from './useOffers';

function ProposalDetailPage() {
  const navigate = useNavigate();
  const { proposalId } = useParams();
  const [searchParams] = useSearchParams();
  const [acceptedDeal, setAcceptedDeal] = useState(null);
  const [acceptError, setAcceptError] = useState('');
  const [isAccepting, setIsAccepting] = useState(false);
  const requestId = getRequestId(searchParams);
  const { error, isLoading, offers } = useOffers(requestId);
  const proposal = offers.find((item) => item.id === Number(proposalId));

  const handleAccept = async () => {
    try {
      setIsAccepting(true);
      setAcceptError('');
      const deal = await acceptOffer(proposal.id);
      setAcceptedDeal(deal);
      localStorage.setItem('acceptedDealId', String(deal.dealId));
    } catch (requestError) {
      setAcceptError(
        requestError.response?.data?.message || '제안을 수락하지 못했습니다.',
      );
    } finally {
      setIsAccepting(false);
    }
  };

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
            {proposal?.storeName ?? '제안 상세'}
          </h1>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {isLoading && (
            <p className="rounded-2xl bg-white p-5 text-center text-[14px] text-[#8b95a1]">
              제안을 불러오는 중이에요.
            </p>
          )}

          {!isLoading && (error || !proposal) && (
            <p className="rounded-2xl bg-white p-5 text-center text-[14px] text-[#8b95a1]">
              {error || '해당 제안을 찾을 수 없습니다.'}
            </p>
          )}

          {!isLoading && proposal && <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span
                className="mt-1 flex size-14 shrink-0 items-center justify-center rounded-2xl text-[28px] leading-[42px]"
                style={{ backgroundColor: proposal.emojiBackground }}
              >
                {proposal.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <ProposalDetailCard
                  isAccepted={Boolean(acceptedDeal)}
                  isAccepting={isAccepting}
                  onAccept={handleAccept}
                  proposal={proposal}
                  tableCount={proposalRequest.tableCount}
                />
              </div>
            </div>

            {acceptError && (
              <p className="rounded-xl bg-[#fff0eb] p-3 text-[13px] text-[#ff637e]">
                {acceptError}
              </p>
            )}

            {acceptedDeal && (
              <ReservationConfirmationCard
                proposal={{
                  ...proposal,
                  storeName: acceptedDeal.storeName,
                  totalPrice: acceptedDeal.finalPrice,
                }}
                request={proposalRequest}
              />
            )}
          </div>}
        </div>
      </section>
    </MobileLayout>
  );
}

export default ProposalDetailPage;

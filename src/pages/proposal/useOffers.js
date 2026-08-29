import { useEffect, useState } from 'react';
import { getOffers } from '../../apis/offers';
import { proposalRequest } from '../../mocks/proposals';

const EMOJIS = ['🍺', '🥩', '🍶', '🍻'];
const EMOJI_BACKGROUNDS = ['#ebf3fe', '#fff0eb', '#f0f7ee', '#fff8e1'];

const toProposal = (offer, index) => ({
  ...offer,
  id: offer.offerId,
  address: `최대 ${offer.storeMaxCapacity}명`,
  benefitDescription: offer.benefitDescription,
  emoji: EMOJIS[index % EMOJIS.length],
  emojiBackground: EMOJI_BACKGROUNDS[index % EMOJI_BACKGROUNDS.length],
  message: offer.message,
  preview: offer.benefitDescription || offer.message,
  pricePerTable: Math.ceil(offer.offeredTotalPrice / proposalRequest.tableCount),
  recommendations: [],
  storeName: offer.storeName,
  totalPrice: offer.offeredTotalPrice,
});

export function getRequestId(searchParams) {
  return searchParams.get('requestId') || localStorage.getItem('reservationRequestId');
}

export function useOffers(requestId) {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(requestId));
  const [error, setError] = useState(requestId ? '' : '예약 요청 ID가 없습니다.');

  useEffect(() => {
    if (!requestId) return;

    let isActive = true;

    getOffers(requestId)
      .then((result) => {
        if (isActive) setOffers(result.map(toProposal));
      })
      .catch((requestError) => {
        if (!isActive) return;
        setOffers([]);
        setError(
          requestError.response?.data?.message || '제안 목록을 불러오지 못했습니다.',
        );
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [requestId]);

  return { error, isLoading, offers };
}

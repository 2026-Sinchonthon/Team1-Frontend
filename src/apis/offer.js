import axiosInstance from './axiosInstance';

// POST /requests/{requestId}/offers - 가게가 예약 요청에 제안 보내기
export async function createOffer(
  requestId,
  { benefitDescription, discountRate, message, offeredTotalPrice, storeId },
) {
  const { data } = await axiosInstance.post(`/requests/${requestId}/offers`, {
    benefitDescription,
    discountRate,
    message,
    offeredTotalPrice,
    storeId,
  });
  return data;
}

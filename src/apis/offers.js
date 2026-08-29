import axiosInstance from './axiosInstance';

// 로그인 기능은 구현하지 않기로 해서, 학생 계정은 회원 id 1로 고정
const STUDENT_MEMBER_ID = 1;

function withMemberIdHeader() {
  return { headers: { 'X-Member-Id': STUDENT_MEMBER_ID } };
}

export async function getOffers(requestId) {
  const response = await axiosInstance.get(
    `/requests/${requestId}/offers`,
    withMemberIdHeader(),
  );
  return response.data.result ?? [];
}

export async function acceptOffer(offerId) {
  const response = await axiosInstance.post(
    `/offers/${offerId}/accept`,
    undefined,
    withMemberIdHeader(),
  );
  return response.data.result;
}

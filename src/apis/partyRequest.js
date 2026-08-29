import axiosInstance from './axiosInstance';

// GET /requests?storeId={storeId} - 우리 가게에 제안 가능한 예약 요청 목록
export async function getAvailableRequests(storeId) {
  const { data } = await axiosInstance.get('/requests', { params: { storeId } });
  return data;
}

// GET /requests/{id} - 예약 요청 상세 조회
export async function getRequestDetail(requestId) {
  const { data } = await axiosInstance.get(`/requests/${requestId}`);
  return data;
}

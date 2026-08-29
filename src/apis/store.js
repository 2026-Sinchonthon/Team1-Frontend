import axiosInstance from './axiosInstance';

// TODO: 로그인 기능 붙으면 실제 로그인한 유저 id로 교체
const TEST_MEMBER_ID = Number(import.meta.env.VITE_TEST_MEMBER_ID) || 1;

function withMemberIdHeader() {
  return { headers: { 'X-Member-Id': TEST_MEMBER_ID } };
}

// POST /stores - 가게 등록
export async function registerStore({ address, description, maxCapacity, name, region }) {
  const { data } = await axiosInstance.post(
    '/stores',
    { address, description, maxCapacity, name, region },
    withMemberIdHeader(),
  );
  return data;
}

// GET /stores/mine - 내 가게 목록 조회
// (registerStore 응답에 생성된 storeId가 안 내려와서, 메뉴 등록에 쓸 storeId를
//  찾아오려고 내부적으로만 사용. 실제 "내 가게 목록" 화면은 팀원 담당.)
export async function getMyStores() {
  const { data } = await axiosInstance.get('/stores/mine', withMemberIdHeader());
  return data;
}

// POST /stores/{storeId}/menus - 메뉴 일괄 등록
export async function registerMenus(storeId, menus) {
  const { data } = await axiosInstance.post(
    `/stores/${storeId}/menus`,
    { menus },
    withMemberIdHeader(),
  );
  return data;
}

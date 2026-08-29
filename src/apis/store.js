import axiosInstance from "./axiosInstance";

// 로그인 기능은 구현하지 않기로 해서, 사장님 계정은 회원 id 4(merchant01)로 고정
const OWNER_MEMBER_ID = 4;

function withMemberIdHeader() {
  return { headers: { "X-Member-Id": OWNER_MEMBER_ID } };
}

// POST /stores - 가게 등록
export async function registerStore({
  address,
  description,
  maxCapacity,
  name,
  region,
}) {
  const { data } = await axiosInstance.post(
    "/stores",
    { address, description, maxCapacity, name, region },
    withMemberIdHeader(),
  );
  return data;
}

// GET /stores/mine - 내 가게 목록 조회
// (registerStore 응답에 생성된 storeId가 안 내려와서, 메뉴 등록에 쓸 storeId를
//  찾아오려고 내부적으로만 사용.)
export async function getMyStores() {
  const { data } = await axiosInstance.get(
    "/stores/mine",
    withMemberIdHeader(),
  );
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyStores, registerMenus, registerStore } from '../../../apis/store';
import OwnerOnboardingLayout from './OwnerOnboardingLayout';
import { useOwnerOnboarding } from './useOwnerOnboarding';

const MENU_OPTIONS = [
  {
    id: 'import',
    title: '정보 불러오기',
    description: '카카오맵·네이버 플레이스에서 가져와요',
    icon: '/icons/owner-onboarding/add-circle.svg',
    iconSelected: '/icons/owner-onboarding/add-circle-white.svg',
  },
  {
    id: 'manual',
    title: '직접 입력하기',
    description: '메뉴 이름을 직접 적어요',
    icon: '/icons/owner-onboarding/pencil.svg',
    iconSelected: '/icons/owner-onboarding/pencil-white.svg',
  },
];

const MAX_VISIBLE_IMPORTED_MENU = 5;

// TODO: 카카오맵·네이버 플레이스 연동 전까지 쓰는 더미 데이터 (5개 초과 시 노출되는 "외 N개 메뉴" 확인용으로 17개 채워둠)
const MOCK_IMPORTED_MENU = [
  '소주·맥주 세트 (2병 기준)',
  '삼겹살 1인분',
  '파전·두부김치',
  '계란찜',
  '냉면',
  '골뱅이무침',
  '오징어볶음',
  '떡볶이',
  '치즈볼',
  '감자튀김',
  '닭발',
  '순대볶음',
  '어묵탕',
  '해물파전',
  '콩나물무침',
  '계란말이',
  '가츠동',
];

// 메뉴 카테고리/가격을 아직 입력받는 화면이 없어서, 일단 고정값으로 등록
// (price는 스펙엔 선택값이라고 나와있는데, 실제 서버는 0원보다 커야 함 - 없으면 400)
// TODO: 메뉴별 카테고리(MAIN/FRIED/SOUP/DRY/SIDE/ETC), 가격 입력 UI 생기면 교체
const DEFAULT_MENU_PRICE = 1000;

function toMenuPayload(menuName) {
  return { category: 'ETC', name: menuName, price: DEFAULT_MENU_PRICE };
}

// 상권 선택 화면이 디자인에 없어서, 일단 고정값으로 등록 (신촌쿵야 프로젝트 기준)
// TODO: 상권 선택 UI 생기면 formData 기반으로 교체
const DEFAULT_REGION = 'SINCHON';

function OwnerOnboardingStep4() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useOwnerOnboarding();
  const { address, capacity, importedMenu, manualMenuText, menuType, storeName } = formData;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const nextDisabled =
    isSubmitting || !menuType || (menuType === 'manual' && !manualMenuText.trim());

  const handleFinish = async () => {
    setSubmitError('');
    setIsSubmitting(true);

    try {
      await registerStore({
        address,
        maxCapacity: capacity ? Number(capacity) : undefined,
        name: storeName,
        region: DEFAULT_REGION,
      });

      // registerStore 응답에 storeId가 안 내려와서, 방금 만든 가게를 찾아옴
      const { result } = await getMyStores();
      const myStore =
        result.stores.find((store) => store.name === storeName) ??
        result.stores[result.stores.length - 1];

      const menus =
        menuType === 'import'
          ? importedMenu.map(toMenuPayload)
          : manualMenuText
              .split(',')
              .map((name) => name.trim())
              .filter(Boolean)
              .map(toMenuPayload);

      if (myStore && menus.length > 0) {
        await registerMenus(myStore.storeId, menus);
      }

      navigate('/owner/proposal');
    } catch (error) {
      console.error(error);
      setSubmitError('제출 중 문제가 발생했어요. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <OwnerOnboardingLayout
      nextDisabled={nextDisabled}
      nextLabel={isSubmitting ? '등록 중...' : '완료'}
      onNext={handleFinish}
      step={4}
      title="가게 메뉴를 등록해주세요"
    >
      {submitError && (
        <p className="mb-3 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#f04438]">
          {submitError}
        </p>
      )}
      <div className="flex flex-col gap-3">
        {MENU_OPTIONS.map((option) => {
          const isSelected = menuType === option.id;

          return (
            <div
              key={option.id}
              className={`rounded-2xl border-2 p-4 transition-colors ${
                isSelected ? 'border-[#3182f6] bg-[#ebf3fe]' : 'border-transparent bg-[#f2f4f6]'
              }`}
            >
              <button
                aria-pressed={isSelected}
                className="flex w-full items-center gap-4 text-left"
                onClick={() =>
                  updateFormData(
                    option.id === 'import'
                      ? { menuType: 'import', importedMenu: MOCK_IMPORTED_MENU }
                      : { menuType: 'manual' },
                  )
                }
                type="button"
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${
                    isSelected ? 'bg-[#3182f6]' : 'bg-white'
                  }`}
                >
                  <img
                    alt=""
                    className="size-[22px]"
                    src={isSelected ? option.iconSelected : option.icon}
                  />
                </span>

                <span className="flex flex-1 flex-col">
                  <strong
                    className={`font-['Pretendard',sans-serif] text-[17px] font-semibold leading-[25.5px] ${
                      isSelected ? 'text-[#3182f6]' : 'text-[#191f28]'
                    }`}
                  >
                    {option.title}
                  </strong>
                  <span className="font-['Pretendard',sans-serif] text-[13px] leading-[19.5px] text-[#8b95a1]">
                    {option.description}
                  </span>
                </span>

                {isSelected && (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#3182f6]">
                    <img alt="" className="size-[11px]" src="/icons/owner-onboarding/check.svg" />
                  </span>
                )}
              </button>

              {isSelected && option.id === 'import' && (
                <div className="mt-4 flex flex-col gap-2 pl-[60px]">
                  <p className="font-['Pretendard',sans-serif] text-[12px] font-semibold leading-[18px] text-[#8b95a1]">
                    불러온 메뉴 {importedMenu.length}개
                  </p>
                  {importedMenu.slice(0, MAX_VISIBLE_IMPORTED_MENU).map((menuName) => (
                    <div className="flex items-center gap-2" key={menuName}>
                      <span className="size-1.5 shrink-0 rounded-full bg-[#3182f6]" />
                      <span className="font-['Pretendard',sans-serif] text-[14px] leading-[21px] text-[#4e5968]">
                        {menuName}
                      </span>
                    </div>
                  ))}
                  {importedMenu.length > MAX_VISIBLE_IMPORTED_MENU && (
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#3182f6]" />
                      <span className="font-['Pretendard',sans-serif] text-[14px] leading-[21px] text-[#4e5968]">
                        외 {importedMenu.length - MAX_VISIBLE_IMPORTED_MENU}개 메뉴
                      </span>
                    </div>
                  )}
                </div>
              )}

              {isSelected && option.id === 'manual' && (
                <div className="mt-4">
                  <textarea
                    className="w-full resize-none rounded-xl bg-white p-4 font-['Pretendard',sans-serif] text-[14px] leading-[22.75px] text-[#191f28] placeholder:text-[#c5cad2] focus:outline-none"
                    onChange={(e) => updateFormData({ manualMenuText: e.target.value })}
                    placeholder={'예: 소주, 맥주, 삼겹살, 파전\n메뉴를 쉼표로 구분해 입력해주세요'}
                    rows={3}
                    value={manualMenuText}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </OwnerOnboardingLayout>
  );
}

export default OwnerOnboardingStep4;

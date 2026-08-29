import { useLocation, useNavigate } from 'react-router-dom';

const TABS = [
  {
    to: '/owner/proposal',
    label: '예약 확인하기',
    icon: '/icons/owner-proposal/calendar-active.svg',
    iconInactive: '/icons/owner-proposal/calendar-inactive.svg',
    isActive: (pathname) => pathname.startsWith('/owner/proposal'),
  },
  {
    to: '/owner/mypage',
    label: '마이페이지',
    icon: '/icons/owner-proposal/person-active.svg',
    iconInactive: '/icons/owner-proposal/person-inactive.svg',
    isActive: (pathname) => pathname.startsWith('/owner/mypage'),
  },
];

function OwnerBottomNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="flex w-full shrink-0 border-t border-[#f2f4f6] bg-white">
      {TABS.map((tab) => {
        const isActive = tab.isActive(pathname);

        return (
          <button
            key={tab.to}
            className="flex flex-1 flex-col items-center gap-1 py-3"
            onClick={() => navigate(tab.to)}
            type="button"
          >
            <img
              alt=""
              className="size-[22px]"
              src={isActive ? tab.icon : tab.iconInactive}
            />
            <span
              className={`font-['Pretendard',sans-serif] text-[11px] leading-[16.5px] ${
                isActive ? 'font-semibold text-[#f04438]' : 'font-medium text-[#8b95a1]'
              }`}
            >
              {tab.label}
            </span>
            {isActive && <span className="size-1 rounded-full bg-[#f04438]" />}
          </button>
        );
      })}
    </nav>
  );
}

export default OwnerBottomNav;

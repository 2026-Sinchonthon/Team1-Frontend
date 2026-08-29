import { NavLink } from 'react-router-dom';
import registerIcon from '../../assets/icons/nav-register.svg';
import myIcon from '../../assets/icons/nav-my.svg';
import myInactiveIcon from '../../assets/icons/nav-my-inactive.svg';
import proposalsIcon from '../../assets/icons/nav-proposals.svg';
import proposalsActiveIcon from '../../assets/icons/nav-proposals-active.svg';

const NAV_ITEMS = [
  { label: '제안 등록하기', path: '/onboarding/reservation/1', icon: registerIcon },
  { label: '마이페이지', path: '/my', icon: myInactiveIcon, activeIcon: myIcon },
  { label: '제안 확인하기', path: '/proposals', icon: proposalsIcon, activeIcon: proposalsActiveIcon },
];

function BottomNav() {
  return (
    <nav className="flex h-[75px] shrink-0 border-t border-[#f2f4f6] bg-white font-['Pretendard',sans-serif]">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          className={({ isActive }) => `flex flex-1 flex-col items-center gap-1 py-3 text-[11px] font-medium leading-[16.5px] ${isActive ? 'text-[#3182f6]' : 'text-[#8b95a1]'}`}
          to={item.path}
        >
          {({ isActive }) => (
            <>
              <span className="size-[22px] overflow-hidden">
                <img className="size-full" src={isActive ? (item.activeIcon ?? item.icon) : item.icon} alt="" />
              </span>
              <span>{item.label}</span>
              {isActive && <span className="size-1 rounded-full bg-[#3182f6]" />}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;

import { Outlet, useLocation } from 'react-router-dom';
import MobileLayout from '../../../layouts/MobileLayout';

const TOTAL_STEPS = 5;

function OwnerOnboardingShell() {
  const { pathname } = useLocation();
  const stepMatch = pathname.match(/\/onboarding\/owner\/(\d+)/);
  const step = stepMatch ? Number(stepMatch[1]) : 1;

  return (
    <MobileLayout>
      <div className="flex min-h-full flex-col">
        <div className="h-[2px] w-full bg-[#f2f4f6]">
          <div
            className="h-[2px] bg-[#3182f6] transition-[width] duration-500 ease-out"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <Outlet />
      </div>
    </MobileLayout>
  );
}

export default OwnerOnboardingShell;

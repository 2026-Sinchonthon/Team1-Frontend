import MobileLayout from '../../layouts/MobileLayout';

const TOTAL_STEPS = 6;

function OnboardingLayout({ children, step }) {
  return (
    <MobileLayout>
      <section className="flex min-h-full flex-col px-5 py-6">
        <header className="shrink-0">
          <p className="text-sm text-gray-500">
            {step} / {TOTAL_STEPS}
          </p>
        </header>

        <div className="flex-1 py-8">{children}</div>

        <footer className="shrink-0">
          {/* 이전/다음 버튼 영역 */}
        </footer>
      </section>
    </MobileLayout>
  );
}

export default OnboardingLayout;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingNextButton from '../components/onboarding/OnboardingNextButton';
import PurposeCard from '../components/onboarding/PurposeCard';
import MobileLayout from '../layouts/MobileLayout';

function MainPage() {
  const navigate = useNavigate();
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const handleNext = () => {
    if (selectedPurpose === 'reservation') {
      navigate('/onboarding/reservation/1');
    }
  };

  return (
    <MobileLayout>
      <section className="flex min-h-full flex-col overflow-hidden bg-white font-['Pretendard',sans-serif]">
        <header className="shrink-0 px-6 pb-8 pt-16">
          <p className="text-[13px] font-semibold leading-[19.5px] tracking-[1.3px] text-[#3182f6]">
            UNIPUB
          </p>
          <h1 className="mt-3 text-[24px] font-semibold leading-[33px] text-[#191f28]">
            어떤 목적으로
            <br />
            오셨나요?
          </h1>
        </header>

        <div className="flex flex-1 flex-col gap-4 px-6">
          <PurposeCard
            emoji="🍻"
            title="단체 예약하기"
            description="학생회, 동아리 등 단체 술자리를 예약해요"
            isSelected={selectedPurpose === 'reservation'}
            onClick={() => setSelectedPurpose('reservation')}
          />
          <PurposeCard
            emoji="🏪"
            title="가게 등록하기"
            description="단체 손님을 받는 사장님이에요"
          />
        </div>

        <footer className="h-[108px] shrink-0 px-6 pb-10 pt-3">
          <OnboardingNextButton
            disabled={selectedPurpose !== 'reservation'}
            onClick={handleNext}
          />
        </footer>
      </section>
    </MobileLayout>
  );
}

export default MainPage;

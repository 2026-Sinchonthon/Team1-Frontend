import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/my';
import {
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
  OnboardingStep4,
  OnboardingStep5,
  OnboardingStep6,
} from './pages/onboarding';
import {
  ProposalCheckPage,
  ProposalCreatePage,
} from './pages/proposal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/onboarding" element={<Navigate to="/onboarding/1" replace />} />
      <Route path="/onboarding/1" element={<OnboardingStep1 />} />
      <Route path="/onboarding/2" element={<OnboardingStep2 />} />
      <Route path="/onboarding/3" element={<OnboardingStep3 />} />
      <Route path="/onboarding/4" element={<OnboardingStep4 />} />
      <Route path="/onboarding/5" element={<OnboardingStep5 />} />
      <Route path="/onboarding/6" element={<OnboardingStep6 />} />

      <Route path="/proposals" element={<ProposalCheckPage />} />
      <Route path="/proposals/new" element={<ProposalCreatePage />} />
      <Route path="/my" element={<MyPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

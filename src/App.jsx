import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/my';
import {
  ReservationOnboardingStep1,
  ReservationOnboardingStep2,
  ReservationOnboardingStep3,
  ReservationOnboardingStep4,
  ReservationOnboardingStep5,
  ReservationOnboardingStep6,
} from './pages/onboarding';
import {
  ProposalCheckPage,
  ProposalCreatePage,
} from './pages/proposal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/onboarding" element={<Navigate to="/onboarding/reservation/1" replace />} />
      <Route path="/onboarding/:step" element={<Navigate to="/onboarding/reservation/1" replace />} />
      <Route path="/onboarding/reservation" element={<Navigate to="/onboarding/reservation/1" replace />} />
      <Route path="/onboarding/reservation/1" element={<ReservationOnboardingStep1 />} />
      <Route path="/onboarding/reservation/2" element={<ReservationOnboardingStep2 />} />
      <Route path="/onboarding/reservation/3" element={<ReservationOnboardingStep3 />} />
      <Route path="/onboarding/reservation/4" element={<ReservationOnboardingStep4 />} />
      <Route path="/onboarding/reservation/5" element={<ReservationOnboardingStep5 />} />
      <Route path="/onboarding/reservation/6" element={<ReservationOnboardingStep6 />} />

      <Route path="/proposals" element={<ProposalCheckPage />} />
      <Route path="/proposals/new" element={<ProposalCreatePage />} />
      <Route path="/my" element={<MyPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

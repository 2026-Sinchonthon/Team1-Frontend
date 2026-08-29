import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/my';
import {
  OwnerOnboardingStep1,
  OwnerOnboardingStep2,
  OwnerOnboardingStep3,
  OwnerOnboardingStep4,
  ReservationOnboardingStep1,
  ReservationOnboardingStep2,
  ReservationOnboardingStep3,
  ReservationOnboardingStep4,
  ReservationOnboardingStep5,
  ReservationOnboardingStep6,
} from './pages/onboarding';
import { OwnerOnboardingProvider } from './pages/onboarding/owner/OwnerOnboardingContext';
import {
  ProposalCheckPage,
  ProposalCreatePage,
} from './pages/proposal';

function OwnerOnboardingRoutes() {
  return (
    <OwnerOnboardingProvider>
      <Outlet />
    </OwnerOnboardingProvider>
  );
}

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

      <Route element={<OwnerOnboardingRoutes />}>
        <Route path="/onboarding/owner" element={<Navigate to="/onboarding/owner/1" replace />} />
        <Route path="/onboarding/owner/1" element={<OwnerOnboardingStep1 />} />
        <Route path="/onboarding/owner/2" element={<OwnerOnboardingStep2 />} />
        <Route path="/onboarding/owner/3" element={<OwnerOnboardingStep3 />} />
        <Route path="/onboarding/owner/4" element={<OwnerOnboardingStep4 />} />
      </Route>

      <Route path="/proposals" element={<ProposalCheckPage />} />
      <Route path="/proposals/new" element={<ProposalCreatePage />} />
      <Route path="/my" element={<MyPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

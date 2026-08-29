import { useState } from 'react';
import { createPartyRequest } from '../../../apis/partyRequests';
import {
  INITIAL_RESERVATION_FORM_DATA,
  ReservationOnboardingContext,
} from './reservationOnboardingContextValue';

const toReservedAt = (date, time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const reservedAt = new Date(date);
  reservedAt.setHours(hours, minutes, 0, 0);
  return reservedAt.toISOString();
};

export function ReservationOnboardingProvider({ children }) {
  const [formData, setFormData] = useState(INITIAL_RESERVATION_FORM_DATA);
  const [requestId, setRequestId] = useState(
    () => localStorage.getItem('reservationRequestId'),
  );

  const updateFormData = (patch) => {
    setFormData((previous) => ({ ...previous, ...patch }));
  };

  const submitRequest = async (patch = {}) => {
    const completedForm = { ...formData, ...patch };
    const result = await createPartyRequest({
      groupName: completedForm.groupName.trim(),
      purpose: completedForm.purpose,
      headcount: completedForm.headcount,
      reservedAt: toReservedAt(completedForm.selectedDate, completedForm.selectedTime),
      preferredRegion: 'SINCHON',
      totalBudget: completedForm.totalBudget,
      baseFoodBudget: completedForm.totalBudget,
      note: '',
    });

    const createdRequestId = String(result.requestId);
    updateFormData(patch);
    setRequestId(createdRequestId);
    localStorage.setItem('reservationRequestId', createdRequestId);
    return createdRequestId;
  };

  return (
    <ReservationOnboardingContext.Provider
      value={{ formData, requestId, submitRequest, updateFormData }}
    >
      {children}
    </ReservationOnboardingContext.Provider>
  );
}

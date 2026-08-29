import { createContext } from 'react';

export const INITIAL_RESERVATION_FORM_DATA = {
  groupName: '',
  purpose: null,
  headcount: 0,
  selectedDate: null,
  selectedTime: null,
  totalBudget: 1000000,
};

export const ReservationOnboardingContext = createContext(null);

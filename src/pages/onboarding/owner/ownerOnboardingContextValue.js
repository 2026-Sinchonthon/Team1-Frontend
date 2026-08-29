import { createContext } from 'react';

export const INITIAL_OWNER_ONBOARDING_FORM_DATA = {
  storeName: '',
  address: '',
  capacity: '',
  menuType: null, // 'import' | 'manual'
  importedMenu: [], // menuType === 'import'일 때 불러온 메뉴 목록
  manualMenuText: '',
};

export const OwnerOnboardingContext = createContext(null);

import { useContext } from 'react';
import { OwnerProposalContext } from './ownerProposalContextValue';

export function useOwnerProposal() {
  const context = useContext(OwnerProposalContext);
  if (!context) {
    throw new Error('useOwnerProposal은 OwnerProposalProvider 내부에서만 사용할 수 있어요.');
  }
  return context;
}

import { useState } from 'react';
import { MOCK_PROPOSAL_REQUESTS } from '../../../mocks/ownerProposalRequests';
import { OwnerProposalContext } from './ownerProposalContextValue';

export function OwnerProposalProvider({ children }) {
  const [requests] = useState(MOCK_PROPOSAL_REQUESTS);
  // requestId -> { message, discountRate }
  const [proposals, setProposals] = useState({});

  const getRequest = (requestId) => requests.find((request) => request.id === requestId);

  const submitProposal = (requestId, { discountRate, message }) => {
    setProposals((prev) => ({
      ...prev,
      [requestId]: { discountRate, message },
    }));
  };

  return (
    <OwnerProposalContext.Provider
      value={{ getRequest, proposals, requests, submitProposal }}
    >
      {children}
    </OwnerProposalContext.Provider>
  );
}

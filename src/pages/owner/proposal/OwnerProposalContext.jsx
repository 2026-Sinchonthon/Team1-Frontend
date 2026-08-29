import { useEffect, useState } from 'react';
import { getAvailableRequests } from '../../../apis/partyRequest';
import { getMyStores } from '../../../apis/store';
import { mapPartyRequest } from './mapPartyRequest';
import { OwnerProposalContext } from './ownerProposalContextValue';

export function OwnerProposalProvider({ children }) {
  const [storeId, setStoreId] = useState(null);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  // requestId -> { message, discountRate } (이번 세션에서 보낸 제안만 로컬로 표시)
  const [proposals, setProposals] = useState({});

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setLoadError('');

      try {
        const { result: storesResult } = await getMyStores();
        const myStore = storesResult.stores[0];
        if (!myStore) {
          throw new Error('등록된 가게가 없어요.');
        }
        if (cancelled) return;
        setStoreId(myStore.storeId);

        const { result } = await getAvailableRequests(myStore.storeId);
        if (cancelled) return;
        setRequests(result.map(mapPartyRequest));
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setLoadError('예약 요청 목록을 불러오지 못했어요.');
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const getRequest = (requestId) =>
    requests.find((request) => String(request.id) === String(requestId));

  const submitProposal = (requestId, { discountRate, message }) => {
    setProposals((prev) => ({
      ...prev,
      [requestId]: { discountRate, message },
    }));
  };

  return (
    <OwnerProposalContext.Provider
      value={{ getRequest, isLoading, loadError, proposals, requests, storeId, submitProposal }}
    >
      {children}
    </OwnerProposalContext.Provider>
  );
}

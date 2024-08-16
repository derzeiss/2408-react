import React from 'react';
import { useState } from 'react';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

export function useStateMachine<T = string>(initialState: FetchState = 'initial') {
  const [state, setState] = useState<FetchState>(initialState);
  const [data, setData] = useState<T>();

  const next = React.useCallback((state: FetchState, data?: T) => {
    setState(state);
    setData(data);
  }, []);

  return { state, data, next };
}

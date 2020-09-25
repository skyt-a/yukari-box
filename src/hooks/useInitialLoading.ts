import { useEffect, useState } from 'react';

const LOADING_SECONDS = 2000;
export const useInitialLoading = (): [typeof LOADING_SECONDS, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), LOADING_SECONDS);
  }, []);

  return [LOADING_SECONDS, isLoading];
};

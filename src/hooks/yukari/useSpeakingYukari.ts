import { useEffect, useState } from 'react';
import { StandImageKey } from 'components/atoms/YukariStand';

export const useSpeakingYukari = () => {
  const [standKey, setStandKey] = useState<StandImageKey>('Normal');
  useEffect(() => {
    const key = setInterval(
      () =>
        setStandKey((standKey) =>
          standKey === 'Normal' ? 'LaughOpen' : 'Normal',
        ),
      150,
    );

    return () => {
      clearInterval(key);
    };
  }, []);

  return standKey;
};

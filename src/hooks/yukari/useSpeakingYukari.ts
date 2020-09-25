import { useCallback, useEffect, useState } from 'react';
import { StandImageKey } from 'components/atoms/YukariStand';
import { useRecoilValue } from 'recoil';
import { yukariSpeakingState } from 'states/yukari';

export const useSpeakingYukari = (): StandImageKey => {
  const [standKey, setStandKey] = useState<StandImageKey>('Normal');
  const isSpeaking = useRecoilValue(yukariSpeakingState);
  const speak = useCallback(() => {
    setStandKey((standKey) => (standKey === 'Normal' ? 'LaughOpen' : 'Normal'));
  }, [setStandKey]);
  useEffect(() => {
    const key = isSpeaking && setInterval(speak, 150);

    return (): void => {
      if (key) {
        setStandKey('Normal');
        clearInterval(key);
      }
    };
  }, [speak, isSpeaking]);

  return standKey;
};

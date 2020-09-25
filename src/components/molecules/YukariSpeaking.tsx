import React from 'react';
import YukariStand from 'components/atoms/YukariStand';
import { useSpeakingYukari } from 'hooks/yukari/useSpeakingYukari';

const YukariSpeaking: React.FC<unknown> = () => {
  const standKey = useSpeakingYukari();

  return (
    <div>
      <YukariStand standKey={standKey} />
    </div>
  );
};

export default YukariSpeaking;

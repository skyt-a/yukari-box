import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import YukariStand from 'components/atoms/YukariStand';
import { useSpeakingYukari } from 'hooks/yukari/useSpeakingYukari';
import SpeechBubble from 'components/atoms/SpeechBubble';
import { useSetRecoilState } from 'recoil';
import { yukariSpeakingState } from 'states/yukari';
import { FadeIn } from 'styles/animations';

type Props = {
  dialogues: string[];
  onSpeakEnd?: () => void;
  textSpeed?: number;
};

const YukariSpeaking: React.FC<Props> = ({
  dialogues,
  onSpeakEnd,
  textSpeed,
}) => {
  const standKey = useSpeakingYukari();
  const setIsSpeaking = useSetRecoilState(yukariSpeakingState);
  const [isYukariAppear, setIsYukariAppear] = useState(false);
  const onAnimationStart = useCallback(() => {
    setIsSpeaking(true);
  }, [setIsSpeaking]);
  const onAnimationEnd = useCallback(() => {
    setIsSpeaking(false);
  }, [setIsSpeaking]);
  const onAnimationEndYukari = useCallback(() => {
    setIsYukariAppear(true);
  }, [setIsYukariAppear]);

  return (
    <div>
      <YukariWrapper onAnimationEnd={onAnimationEndYukari}>
        <YukariStand standKey={standKey} />
      </YukariWrapper>
      {isYukariAppear && (
        <BubbleWrapper>
          <StyledSpeechBubble
            texts={dialogues}
            onTextsEnd={onSpeakEnd}
            {...{ onAnimationStart, onAnimationEnd }}
          />
        </BubbleWrapper>
      )}
    </div>
  );
};

const YukariWrapper = styled.div`
  animation-name: ${FadeIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const StyledSpeechBubble = styled(SpeechBubble)`
  position: fixed;
  bottom: 80px;
`;

const BubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default YukariSpeaking;

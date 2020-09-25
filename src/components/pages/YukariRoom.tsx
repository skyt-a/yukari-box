import React from 'react';
import styled from 'styled-components';
import YukariSpeaking from 'components/molecules/YukariSpeaking';
import SpeechBubble from 'components/atoms/SpeechBubble';

const Dialogues = ['こんにちは、結月ゆかりです', 'このページでは'];

const YukariRoom = () => {
  return (
    <BackGround>
      <YukariSpeaking />
      <BubbleWrapper>
        <StyledSpeechBubble texts={Dialogues} />
      </BubbleWrapper>
    </BackGround>
  );
};

const BackGround = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #a69abd;
  overflow-x: hidden;
`;

const StyledSpeechBubble = styled(SpeechBubble)`
  position: fixed;
  bottom: 80px;
`;

const BubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default YukariRoom;

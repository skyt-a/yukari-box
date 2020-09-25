import React, { useCallback, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  texts: string[];
};

const SpeechBubble: React.FC<Props> = ({ texts, ...rest }) => {
  const [index, setIndex] = useState(0);
  const addIndex = useCallback(() => {
    setIndex((index) => index + 1);
  }, [setIndex]);
  const textArr = useMemo(() => texts[index]?.split(''), [texts, index]);
  if (!textArr) {
    return null;
  }

  return (
    <Frame {...rest} onClick={addIndex}>
      <Text>
        {textArr.map((t, i) => (
          <Letter
            css={`
              animation-delay: ${i * 0.1}s;
            `}
            key={`${i + t}`}
          >
            {t}
          </Letter>
        ))}
      </Text>
      <Button>Click!</Button>
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.5em;
  margin: 2em 10%;
  background: #cc7eb1;
  box-shadow: 0px 0px 0px 10px #cc7eb1;
  border: dashed 2px white;
  width: 100%;
  max-width: 700px;
  min-height: 120px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Letter = styled.span`
  animation-name: ${FadeIn};
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const Button = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

export default SpeechBubble;

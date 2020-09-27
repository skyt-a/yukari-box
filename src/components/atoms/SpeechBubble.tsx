import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { BorderDashedFrame } from 'styles';
import { FadeIn } from 'styles/animations';
import { deviceMax } from 'styles/device';

type Props = {
  texts: string[];
  textSpeed?: number;
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
  onTextsEnd?: () => void;
};

const SpeechBubble: React.FC<Props> = ({
  texts,
  onAnimationStart,
  onAnimationEnd,
  onTextsEnd,
  textSpeed = 20,
  ...rest
}) => {
  const [index, setIndex] = useState(0);
  const addIndex = useCallback(() => {
    setIndex((index) => index + 1);
  }, [setIndex]);
  const textArr = useMemo(() => texts[index]?.split(''), [texts, index]);
  useEffect(() => {
    setIndex(0);
  }, [texts]);

  if (!textArr) {
    onAnimationEnd();
    if (onTextsEnd) {
      onTextsEnd();
    }

    return null;
  }

  return (
    <Frame {...rest} onClick={addIndex}>
      <Text>
        {textArr.map((t, i) => (
          <Letter
            css={`
              animation-delay: ${i / textSpeed}s;
              animation-duration: ${1 / textSpeed}s;
            `}
            key={`${i + t}`}
            onAnimationStart={
              i !== textArr.length - 1 ? onAnimationStart : undefined
            }
            onAnimationEnd={
              i === textArr.length - 1 ? onAnimationEnd : undefined
            }
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
  ${BorderDashedFrame}
  width: 100%;
  max-width: 700px;
  min-height: 120px;
  margin: 2em 10%;
  cursor: pointer;

  @media ${deviceMax.mobileL} {
    margin: 0;
    max-width: 85vw;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: 0.1em;
  word-break: break-all;
  text-align: left;
  @media ${deviceMax.mobileL} {
    font-size: 16px;
  }
`;

const Letter = styled.span`
  animation-name: ${FadeIn};
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

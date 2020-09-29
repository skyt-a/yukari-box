import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeColor } from 'styles/color';
import LogoImg from '../../assets/images/logo.png';

type Props = {
  loadingSeconds: number;
};

const InitialLoading: React.FC<Props> = ({ loadingSeconds }) => {
  const [progressRate, setProgressRate] = useState(0);
  useEffect(() => {
    const key = setInterval(() => {
      setProgressRate((rate) => rate + 1);
    }, loadingSeconds / 100);

    return () => {
      clearInterval(key);
    };
  }, [loadingSeconds]);

  return (
    <Wrapper>
      <Inner>
        {/* <Logo src={LogoImg} /> */}
        <LoadingBar>
          <LoadingBarInner
            css={`
              width: ${progressRate}%;
            `}
          />
        </LoadingBar>
        <Message>Now Loading...</Message>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ThemeColor.main};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingBar = styled.div`
  width: 80%;
  max-width: 300px;
  height: 24px;
  margin-top: 24px;
  opacity: 0.7;
`;

const LoadingBarInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fef4f4;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  align-self: flex-start;
`;

const Message = styled.span`
  margin-top: 12px;
  color: #fef4f4;
  font-size: 20px;
  font-weight: 700;
`;

export default InitialLoading;

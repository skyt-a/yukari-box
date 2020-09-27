import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const AboutTemplate: React.FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: #fef4f4;
`;

const Title = styled.h2`
  font-size: 40px;
`;

export default AboutTemplate;

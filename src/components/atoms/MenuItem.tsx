import React from 'react';
import styled from 'styled-components';
import { ThemeColor } from 'styles/color';

type Prop = {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const MenuItem: React.FC<Prop> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}) => {
  return (
    <Frame {...{ onMouseEnter, onMouseLeave, onClick }} {...rest}>
      {children}
    </Frame>
  );
};

const Frame = styled.div`
  height: 60px;
  background-color: ${ThemeColor.sub};
  cursor: pointer;
`;

export default MenuItem;

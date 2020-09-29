import { css } from 'styled-components';
import { ThemeColor } from './color';

export const BorderDashedFrame = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.5em;
  background: ${ThemeColor.sub};
  box-shadow: 0px 0px 0px 10px ${ThemeColor.sub};
  border: dashed 2px white;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

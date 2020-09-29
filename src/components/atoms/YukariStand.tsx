import React, { useMemo } from 'react';
import styled from 'styled-components';
import { deviceMax } from 'styles/device';
import Normal from '../../assets/images/stands/youmu_normal.png';
import Kiri from '../../assets/images/stands/yukari_kiri.png';
import LaughOpen from '../../assets/images/stands/youmu_laugh_open.png';

export const StandImage = {
  Normal,
  Kiri,
  LaughOpen,
} as const;
export type StandImageKey = keyof typeof StandImage;

type Props = {
  standKey: StandImageKey;
};

const YukariStand: React.FC<Props> = ({ standKey }) => {
  const standImage = useMemo(() => StandImage[standKey], [standKey]);

  return (
    <Container>
      <Yukari src={standImage} alt="魂魄妖夢の立ち絵です" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Yukari = styled.img`
  position: fixed;
  bottom: 0;
  max-width: 100vw;
  max-height: 80vh;
  transform: scale(1.2);
  @media ${deviceMax.mobileL} {
    transform: scale(1);
  }
`;

export default YukariStand;

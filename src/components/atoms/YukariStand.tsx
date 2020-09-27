import React, { useMemo } from 'react';
import styled from 'styled-components';
import { deviceMax } from 'styles/device';
import Normal from '../../assets/images/stands/yukari_normal.png';
import Kiri from '../../assets/images/stands/yukari_kiri.png';
import LaughOpen from '../../assets/images/stands/yukari_laugh_open.png';

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
      <Yukari src={standImage} alt="Voiceroid結月ゆかりの立ち絵です" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Yukari = styled.img`
  max-width: 100vw;
  @media ${deviceMax.mobileL} {
    transform: scale(1.55);
    transform-origin: top;
  }
`;

export default YukariStand;

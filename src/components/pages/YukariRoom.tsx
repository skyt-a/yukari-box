import React from 'react';
import styled from 'styled-components';
import YukariSpeaking from 'components/molecules/YukariSpeaking';
import { Outlet } from 'react-router';

const Dialogues = [
  'こんにちは、結月ゆかりです',
  'このページはWebエンジニアりんごくのポートフォリオページです',
];

const YukariRoom = () => {
  return (
    <BackGround>
      <YukariSpeaking dialogues={Dialogues} />
      <Outlet />
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

export default YukariRoom;

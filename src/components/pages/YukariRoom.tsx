import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import YukariSpeaking from 'components/molecules/YukariSpeaking';
import { Outlet, useNavigate } from 'react-router';
import MenuItem from 'components/atoms/MenuItem';
import { useRecoilState } from 'recoil';
import { yukariSpeakedFirstdialogueState } from 'states/yukari';
import { deviceMax } from 'styles/device';

const Dialogues = [
  'こんにちは、結月ゆかりです',
  'このページはWebエンジニアりんごくのポートフォリオページです',
  'メニューから見たい情報を選んでね',
];

const DialoguesAboutYukari = ['私についての紹介ページです'];
const DialoguesAboutMe = ['このページを作った作者の紹介ページです'];
const DialoguesAboutCredit = [
  'このページを作るにあたりお世話になっている素材元様のご紹介ページです',
];

const YukariRoom: React.FC<unknown> = () => {
  const [isSpeakEndFirst, setIsSpeakEnd] = useRecoilState(
    yukariSpeakedFirstdialogueState,
  );
  const [selecteDialogues, setSelectedDialogues] = useState<string[]>(
    Dialogues,
  );
  const onSpeakEndFirst = useCallback(() => {
    setIsSpeakEnd(true);
  }, [setIsSpeakEnd]);

  const onMouseOverMenu = useCallback(
    (dialogues: string[]) => (): void => {
      setSelectedDialogues(dialogues);
    },
    [setSelectedDialogues],
  );

  const onMouseLeaveMenu = useCallback((): void => {
    setSelectedDialogues([]);
  }, [setSelectedDialogues]);

  const navigate = useNavigate();
  const navigateTo = useCallback(
    (to: string) => (): void => {
      navigate(to);
    },
    [navigate],
  );

  return (
    <BackGround>
      {isSpeakEndFirst && (
        <Menus>
          <StyledMenuItem
            onMouseEnter={onMouseOverMenu(DialoguesAboutMe)}
            onMouseLeave={onMouseLeaveMenu}
            onClick={navigateTo('/room/aboutMe')}
          >
            作者について
          </StyledMenuItem>
          <StyledMenuItem
            onMouseEnter={onMouseOverMenu(DialoguesAboutYukari)}
            onMouseLeave={onMouseLeaveMenu}
          >
            ゆかりさんについて
          </StyledMenuItem>
          <StyledMenuItem
            onMouseEnter={onMouseOverMenu(DialoguesAboutCredit)}
            onMouseLeave={onMouseLeaveMenu}
          >
            クレジット
          </StyledMenuItem>
        </Menus>
      )}
      <YukariSpeaking
        dialogues={selecteDialogues}
        onSpeakEnd={onSpeakEndFirst}
      />
      <Outlet />
    </BackGround>
  );
};

const Menus = styled.div`
  position: fixed;
  top: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  z-index: 1;

  @media ${deviceMax.mobileL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 8px;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  color: #fff;
  @media ${deviceMax.mobileL} {
    width: 100px;
  }
  margin-left: 8px;
`;

const BackGround = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #a69abd;
  overflow-x: hidden;
`;

export default YukariRoom;

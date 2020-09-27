import { atom } from 'recoil';

const YukariStateKeys = {
  isYukariSpeaking: 'isYukariSpeaking',
  yukariSpeakedFirstdialogueState: 'yukariSpeakedFirstdialogueState',
} as const;

export const yukariSpeakingState = atom({
  key: YukariStateKeys.isYukariSpeaking,
  default: false,
});

export const yukariSpeakedFirstdialogueState = atom({
  key: YukariStateKeys.yukariSpeakedFirstdialogueState,
  default: false,
});

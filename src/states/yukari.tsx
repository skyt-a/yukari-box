import { atom } from 'recoil';

const YukariStateKeys = {
  isYukariSpeaking: 'isYukariSpeaking',
} as const;

export const yukariSpeakingState = atom({
  key: YukariStateKeys.isYukariSpeaking,
  default: false,
});

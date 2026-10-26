import en from "../../public/converloop/shots/en/iphone-01-conversation.webp";
import zh from "../../public/converloop/shots/zh/iphone-01-conversation.webp";

// Content-hashed URLs change whenever the canonical product capture changes.
export const converloopShots = {
  en: { conversation: en.src },
  zh: { conversation: zh.src },
} as const;

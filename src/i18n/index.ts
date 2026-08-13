import type { Dict } from './locales/types';
import { en } from './locales/en';
import { zh } from './locales/zh';

export const dictionaries: Record<string, Dict> = { en, zh };

export function getDict(locale: string | undefined): Dict {
  return dictionaries[locale ?? 'en'] ?? en;
}

export type { Dict };

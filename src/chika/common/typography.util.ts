import he from 'he';
import { FuzzyDate } from '../generated/graphql';

export function parseHtml(s: string) {
  return he.decode(s.replace(/(<([^>]+)>)/gi, ''));
}

export function parseFuzzyDate(date?: FuzzyDate | null): string {
  if (!date) {
    return '?';
  }
  const { year, month, day } = date;
  if (!year && !month && !day) {
    return '?';
  }
  return `${day || '?'}-${month || '?'}-${year || '?'}`;
}

export function wrap(s: string, w = 40) {
  const re = new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g');
  return s.replace(re, '$1\n');
}

export function truncate(
  s: string,
  options: { len: number; byWord?: boolean },
) {
  const { len, byWord } = options;
  let res: string;
  if (!byWord) {
    res = s.length <= len ? s : `${s.substring(0, len)}...`;
  } else {
    const words = s.split(' ');
    res = words.length <= len ? s : `${words.slice(0, len).join(' ')}...`;
  }
  return res;
}

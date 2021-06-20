import he from 'he';
import { FuzzyDate } from '../../generated/graphql';

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

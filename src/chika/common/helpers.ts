import he from 'he';

export function parseHtml(s: string) {
  return he.decode(s.replace(/(<([^>]+)>)/gi, ''));
}

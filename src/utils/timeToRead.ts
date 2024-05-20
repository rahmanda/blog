export function timeToRead(val: string, locale: string = 'id') {
  if (locale === 'id') {
    return `Baca ${val} menit`;
  }
  if (locale === 'en') {
    return `${val} minutes read`;
  }
  return val;
}

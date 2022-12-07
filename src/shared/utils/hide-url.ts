export const hideUrl = (url: string) => {
  let startIndex = url.indexOf('://');
  if (startIndex === -1) {
    startIndex = 0;
  }
  startIndex = startIndex + 6;
  let endIndex = url.indexOf(':', startIndex + 1);
  if (endIndex === -1) {
    endIndex = url.indexOf('/', startIndex + 1);
  }
  const start = url.substring(0, startIndex);
  const end = url.substring(endIndex);

  return start + '*****' + end;
};

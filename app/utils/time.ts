export function passingTimeAgo(datetime: string) {
  const currentDatetime = Date.now();
  const relativeDatetime = Date.parse(datetime);
  const result = (currentDatetime - relativeDatetime) / (60 * 60 * 24 * 1000);
  return Math.floor(result);
}

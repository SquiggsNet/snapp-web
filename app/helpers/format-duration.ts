import { helper } from '@ember/component/helper';

export default helper(function formatDuration(positional /*, named*/) {
  if (!positional[0]) return '--:--';

  const seconds = Math.floor(Number(positional[0]) / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
});

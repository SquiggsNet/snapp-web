import { helper } from '@ember/component/helper';

export default helper(function last(positional /*, named*/) {
  if (!Array.isArray(positional[0])) {
    return undefined;
  }
  return positional[0][positional[0].length - 1];
});

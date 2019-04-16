import { NativeModules, findNodeHandle } from 'react-native'
const { UIManager } = NativeModules;

module.exports = function (ref, debug = true) {
  const handle = findNodeHandle(ref);
  if (handle) {
  	setTimeout(() => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        // if (debug) {
        //   console.log(x, y, width, height, pageX, pageY);
        // }
        console.log(ref);
        ref._currentPosition(pageX, pageY);
      });
    }, 0);
  }
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = ` ${str} `;
  let arr = [];
  const array = [];
  for (let i = 1; i < newStr.length; i++) {
      if(newStr[i] != newStr[i - 1] && newStr[i] != newStr[i + 1]) {
          array.push(newStr[i]);
      }
      else if(newStr[i] != newStr[i - 1] && newStr[i] === newStr[i + 1]) {
          arr.push(newStr[i]);
      }
      else if(newStr[i] === newStr[i - 1] && newStr[i] === newStr[i + 1]) {
          arr.push(newStr[i]);
      }
          else if(newStr[i] === newStr[i - 1] && newStr[i] != newStr[i + 1]) {
              arr.push(newStr[i]);
          array.push(arr);
          arr = [];
      }
  }
  let resultStr = '';
  for (let i = 0; i < array.length - 1; i++) {
      if(array[i].length === 1) {
       resultStr += `${array[i][0]}`    
      } else {
       resultStr += `${array[i].length}${array[i][0]}`   
      }
  }
  return resultStr;
}

module.exports = {
  encodeLine
};

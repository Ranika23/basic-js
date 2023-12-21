const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n);
  let max = 0;
  for (let i = 0; i < num.length; i++) {
      let res = '';
      if(i === 0) {
          res = `${num.slice(i + 1)}`;
      } else {
              res = `${num.slice(0,i)}${num.slice(i + 1)}`;
      }
    if (Number(res) > max) {
      max = Number(res)
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};

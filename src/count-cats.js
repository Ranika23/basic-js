const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if(matrix != null && matrix != undefined) {
    for(let i = 0; i < matrix.length; i++) {
      if(matrix[i] != null && matrix[i] != undefined) {
        for(let y = 0; y < matrix[i].length; y++) {
          if(matrix[i][y] != null && matrix[i][y] != undefined) {
            if(matrix[i][y].length === 2 && matrix[i][y] === "^^") {
              count += 1;
            }
          }
        }
      }
    }
  }

  return count;
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let list = []
  for(let i = 0; i < arr.length; i++) {
    
    if(arr[i] === -1) {
          list.push(i)
        delete arr[i];
    }
  }
  let result = arr.filter((item) => String(item).length > 0).sort((a,b) => {return a - b})
  let res = []
  for(let i = 0; i < list.length; i++) {
      let ind = list[i];
      res = [...result.slice(0, ind), -1, ...result.slice(ind)];
      result = [...res];
  }
  if (list.length === 0) {
      res = result.slice().sort((a,b) => {return a - b})
  }
  
return res;
}

module.exports = {
  sortByHeight
};

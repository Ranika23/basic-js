const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  let obj = new Map;

  for(let i = 0; i < domains.length; i++) {
      array.push(domains[i].split("."))
  }
    for(let i = 0; i < array.length; i++) {
    for(let y = array[i].length - 1; y >= 0; y--) {
      let arr = array[i].slice(y).reverse()
      let key;
   array[i][y][0] === '.' ? key = `${arr.join(".")}` : key = `.${arr.join(".")}`
      
        obj.get(key) === undefined ? obj.set(key,1):         
        obj.set(key, obj.get(key) + 1)
    }    
  }
  const result = Object.fromEntries(obj.entries());
  return result;
}

module.exports = {
  getDNSStats
};

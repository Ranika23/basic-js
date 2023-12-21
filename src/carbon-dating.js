const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result = false;
  const n = Number(sampleActivity);
  if (typeof sampleActivity === "string" && Number.isNaN(n) === false && sampleActivity.length > 0 && n > 0) {
    const res = Math.ceil((Math.log(15/n)*5730)/Math.log(2));
    if(res > 0 && res != undefined && res != Infinity) {
      result = res;
    }  
  } 
return result;
}

module.exports = {
  dateSample
};

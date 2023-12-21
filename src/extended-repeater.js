const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const optionObj = Object.keys(options);
  let resultStr = String(str);
  if (optionObj.indexOf('addition') >= 0 && optionObj.indexOf('additionRepeatTimes') >= 0) {
    let addition = String(options.addition);
    let additionTime = options.additionRepeatTimes;
    let arrAddition = [];
    let strChild = '';
    for (let i = 0; i < additionTime; i++) {
      arrAddition.push(addition)
    }
    if (optionObj.indexOf('additionSeparator') >= 0) {
      let additionSep = options.additionSeparator;
      strChild = arrAddition.join(`${additionSep}`)
    } else {
      strChild = arrAddition.join('|')
    }
  
    resultStr += strChild;
  }
  if (optionObj.indexOf('addition') >= 0 && optionObj.indexOf('additionRepeatTimes') === -1) {
    let addition = String(options.addition);
    resultStr += addition;
  }
  if (optionObj.indexOf('repeatTimes') >= 0) {
    let repeatTimes = options.repeatTimes;
    let arrRepeat = [];
    for (let i = 0; i < repeatTimes; i++) {
      arrRepeat.push(resultStr)
    }
    if (optionObj.indexOf('separator') >= 0) {
      let repeatSep = options.separator;
      resultStr = arrRepeat.join(`${repeatSep}`)
    } else {
      resultStr = arrRepeat.join('+')
    }
  }
  return resultStr;
}

module.exports = {
  repeater
};

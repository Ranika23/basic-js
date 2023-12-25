const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//function getSeason(/* date */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//}
function getSeason(date) {
  let result;
  const monthBefore1970 = String(date).split(" ")[1];
  var arrBefore1970 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== "object") {
    throw new Error("Invalid date!")
  }

  if (typeof Object.getOwnPropertySymbols(date)[0] === "symbol") {
    throw new Error("Invalid date!")
  }

  if (date[0] !== undefined || date.John !== undefined) {
    throw new Error("Invalid date!")
  }
  if (typeof date.getFullYear() !== "number") {
    throw new Error("Invalid date!") 
  } 
  if (typeof date.getMonth() !== "number") {
    throw new Error("Invalid date!")
  } 
  if (typeof date.getDate() !== "number") {
    throw new Error("Invalid date!")
  }

  let season = {   
    1: "winter",  
    2: "spring",
    3: "spring",  
    4: "spring",
    5: "summer",  
    6: "summer",
    7: "summer",  
    8: "autumn",
    9: "autumn",  
    10: "autumn",
    11: "winter",  
    12: "winter",
  };
  let season1970 = {   
    1: "winter",  
    2: "winter",
    3: "spring",  
    4: "spring",
    5: "spring",  
    6: "summer",
    7: "summer",  
    8: "summer",
    9: "autumn",  
    10: "autumn",
    11: "autumn",  
    12: "winter",
  };

  result = season[date.getMonth()];
 if (Number(String(date).split(" ")[3]) < 1970) {
  result = season1970[arrBefore1970.indexOf(monthBefore1970) + 1]
 }

 return result;
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const arr = {};
  let turns = 2 ** disksNumber - 1;
  arr['turns'] = turns;
  let seconds = Math.floor(turns / (turnsSpeed / 60 / 60));
  arr['seconds'] = seconds;
  return arr;
}

module.exports = {
  calculateHanoi
};

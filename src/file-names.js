const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  const arr = [];
  const obj = {}
for (let i = 0; i < names.length; i++) {
let firstInd = names.indexOf(names[i]);
let ind = firstInd;
let count = 0
let pref;
if(arr.indexOf(names[i])) {
  while(ind >= 0) {
  arr.push(names[i])
  count += 1
  
if (count > 1) {
    pref = `(${count - 1})`
}

let n = names.indexOf(names[i], ind)

if(pref === undefined) {
  if(Object.values(obj).indexOf(`${names[i]}`) === -1)
        obj[n] = `${names[i]}`
        else {
          obj[n] = `${names[i]}(1)`  
        }
} else {
     obj[n] = `${names[i]}${pref}`
}
ind = names.indexOf(names[i], ind + 1)
}
} 
}
return Object.values(obj)
}

module.exports = {
  renameFiles
};

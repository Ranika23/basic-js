const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = "";
      this.arr = [];
    } else if (value === null) {
      value = "null";
    }
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(position - 1, 1);

    return this;
  },
  reverseChain() {

    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};

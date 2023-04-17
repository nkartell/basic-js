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
function deleteDigit(num) {
  let strOfNum = num.toString(); //'342'
  let allArrFromNum = [];  // empty arr
  for (let i = 0; i < strOfNum.length; i++) {
    let iterArrOfNum = strOfNum.replace(strOfNum[i], '');
    allArrFromNum.push(iterArrOfNum);
  }
  let arrNum = allArrFromNum.map(string => +string); //arr of num
  return Math.max.apply(null, arrNum);
}

module.exports = {
  deleteDigit
};

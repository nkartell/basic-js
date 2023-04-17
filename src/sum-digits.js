const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let sum = 0;
  let str = String(num); '91'

  for (let i = 0; i < str.length; i++) {
    if (num < 10) {
      return sum + num;
    } else {
      sum += Number(str[i]);  //sum=9
      str = str.replace(str[i], '');  //str=1
      i-=1;
      num = Number(str);   //num=1
      return getSumOfDigits(sum + num);
    }
  }
}

module.exports = {
  getSumOfDigits
};

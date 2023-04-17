const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1ArrSort = s1.split('').sort();
  let s2ArrSort = s2.split('').sort();
  let count = 0;
  let maxLengthArr=(s1ArrSort.length>s2ArrSort.length)?s1ArrSort:s2ArrSort;
  let minLengthArr=(s1ArrSort.length<=s2ArrSort.length)?s1ArrSort:s2ArrSort;
  for (let i = 0; i < maxLengthArr.length; i++){
    if (minLengthArr.includes(maxLengthArr[i])){
      count +=1;
      minLengthArr.shift();
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

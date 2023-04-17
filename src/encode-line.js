const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let counter = 1;
  let resultArr=[];
  for (let i = 0; i < str.length; i++){
    
    if (str[i] === str[i+1]){
      counter += 1;
    } else {
      resultArr.push(counter);
      resultArr.push(str[i]);
      counter = 1;
    }
  }
  console.log(resultArr);
  return resultArr.filter(digit => digit != 1).join('');
}

module.exports = {
  encodeLine
};

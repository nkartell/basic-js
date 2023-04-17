const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  let arrCopy = arr.slice();
  
  let sortArr = arrCopy.sort(function(a, b) {
    return a - b;
  });

  let sortArrFilter = arrCopy.filter(digit => digit != -1);
  
  for (let i = 0; i < arr.length;  i++){
    if (arr[i]=== -1) {
      newArr.push(-1);
    } else {
      console.log(Math.min(...sortArrFilter));
      newArr.push(Math.min(...sortArrFilter)); 
      sortArrFilter.shift(); 
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};

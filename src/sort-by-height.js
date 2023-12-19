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
  let sortArray = [];
  let tempArray = arr.filter(check);
  function check(el) {
    return el > -1;
  }
  tempArray.sort(function(a, b) {return a - b});

  let i = 0;
  arr.forEach(el => {
    if (el === -1) {
      sortArray.push(el);
    } else {
        sortArray.push(tempArray[i]);
        i++;
      }
    })
  return sortArray;
}

module.exports = {
  sortByHeight
};

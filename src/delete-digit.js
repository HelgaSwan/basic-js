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
function deleteDigit(n) {
  const num = n.toString().split('');
  let max = 0;
  num.forEach((el, index) => {
    const numTemp = num.slice();
    numTemp.splice(index, 1);
    if (max < Number(numTemp.join(''))) max = Number(numTemp.join(''));
  })
  return max;
}

module.exports = {
  deleteDigit
};

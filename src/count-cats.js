const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const catsEars = '^^';
function countCats(backyard) {
  let i = 0;

  backyard.forEach(element => {
    element.forEach(el => {
      if (el === catsEars) {
        i += 1;
        console.log(i);
      }
    })
  })
  console.log(i);
  return i;
}


module.exports = {
  countCats
};

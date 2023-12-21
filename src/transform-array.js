const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const array1 = arr.slice(0);
  let ind = 0;
  const arrayResult = [];
  if (!(Array.isArray(arr))) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  } 
  
    array1.forEach((el, i) => {
      if (el === '--double-prev') {arrayResult.push(array1[i - 1]); }   
      if (el === '--discard-prev') {arrayResult.splice(i-1,1);}
     if (el === '--discard-next') {array1.splice(i+1,1);}
      if (el === '--double-next') {arrayResult.push(array1[i + 1]);}
      else {arrayResult.push(el);}
  
    })
    let index = arrayResult.indexOf('--double-prev');
     if (index !== -1) {
      arrayResult.splice(index,1);
      }
    index = arrayResult.indexOf('--discard-prev');
      if (index !== -1) {
       arrayResult.splice(index,1);
       }
    index = arrayResult.indexOf('--discard-next');
       if (index !== -1) {
        arrayResult.splice(index,1);
        }
    index = arrayResult.indexOf(undefined);
        if (index !== -1) {
         arrayResult.splice(index,1);
         }
    return arrayResult;
  }

module.exports = {
  transform
};

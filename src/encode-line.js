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
  const tempArray = str.split('');
  const res = [];
  
  while (tempArray.length > 0) {
    let temp = tempArray[0];
    let count = 1;
    tempArray.splice(0,1);
    while (tempArray[0] === temp) {
      count +=1;       
      tempArray.splice(0,1);
    }
    if (count > 1) {
      res.push(count);
      res.push(temp);
    } else {    
      
      res.push(temp);
    }
  }
    
  return res.join('');
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD = 5730 values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    const HALF_LIFE_PERIOD = 5730;
  const MODERN_ACTIVITY = Number(sampleActivity);
    if (!isNaN(MODERN_ACTIVITY) || MODERN_ACTIVITY >= 0) {
      const age = Math.ceil((Math.log(15 / MODERN_ACTIVITY)) * HALF_LIFE_PERIOD / 0.693);
      if (age > 0 && age != Infinity) {
        return (age);
      } 
      
    } 
  } return false;
}

module.exports = {
  dateSample
};

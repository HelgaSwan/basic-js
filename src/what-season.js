const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date !== null && typeof date === 'object') {
      const month = date.getMonth(); 
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    if (month === 11 || month === 0 || month === 1) {
      return "winter";
    } else {
        try {
        if (isNaN(month) || month === undefined || !(month) || month < 0 || month > 11) {
          throw ("Invalid date!");
          
        }
      } 
      catch(err) {
        return (err);
      }

    }
    
  } else {
    return "Unable to determine the time of year!";
  }
  
}

module.exports = {
  getSeason
};

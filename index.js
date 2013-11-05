var contains = require('string-contains');

// Modelled after 'while': http://jsperf.com/count-string-occurrence-in-string

/**
 * Determine the indexes of each occurrance of a substring
 * within a string.
 * @param  {String} string    
 * @param  {String} substring 
 * @return {Array}           
 */

module.exports = function(string, substring){
  var instances = [];
  var pos = 0;
  while (true){
    var occurrence = contains(string, substring, pos);
    if (occurrence) {
      instances.push(occurrence);
      pos = occurrence.to;
    } else {
      break;
    }
  }
  return instances;
};
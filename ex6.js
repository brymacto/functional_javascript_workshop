    function countWords(inputWords) {
      return inputWords.reduce(function(previousValue, currentValue, currentIndex, array) {
          previousValue[currentValue] = array.filter(function(value) {
            return value === currentValue;
          }).length;
          return previousValue;
      }, {});
    }

    module.exports = countWords


// Official solution:
    // function countWords(arr) {
    //   return arr.reduce(function(countMap, word) {
    //     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    //     return countMap
    //   }, {}) // second argument to reduce initialises countMap to {}
    // }

    // module.exports = countWords
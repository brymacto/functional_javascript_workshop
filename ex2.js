var numTimes = 0;   
    function repeat(operation, num) {
      operation();
      numTimes += 1;
      if (numTimes >= num) {
        return;
      } else {
        repeat(operation, num);   
      }
     
    }

    // Do not remove the line below
    module.exports = repeat
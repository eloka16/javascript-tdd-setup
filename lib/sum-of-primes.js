/** The sum of prime numbers up to 
 * a given number
 * 
 **/

'use strict'

module.exports = {
  sumOfPrimes: function(num) {
    if(num < 2) {
      return undefined;
    } else if(typeof num == 'string') {
      return undefined; 
    } else if(num % 1 !== 0){
      return undefined;
    }else if (Array.isArray(num)){
      return undefined;
    } else {
      var list = [];
      for(let j = 2; j <= num; j++) {
        if(this.isPrime(j)) {
          list.push(j);
        }
      }
    }
	let total = list.reduce(this.arraySum)
	return total;
  },

  arraySum: function (x, y) {
    return x + y;
  },

  isPrime: function(n) {
    if (n < 2) return undefined;
    var q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++) {
      if (n % i === 0) {
          return false;
      }
    }
    return true;
  }
}


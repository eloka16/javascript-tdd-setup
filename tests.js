
'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test sum of prime numbers less than or equal to a number", function() {
  it("should return 10 if number is 5", function() {
    assert(
      lib.sumOfPrimes(5) == 10);
  });
  it("should return 17 if number is 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17);
  });
  it("should return 2 if number is 2", function() {
  assert(
    lib.sumOfPrimes(2) == 2);
  });
  it("should return undefined if number is less than 2", function () {
    assert(
      lib.sumOfPrimes(1) == undefined
    )
  })
  it ("should return undefined for array input", function () {
    var arr = [2,3,1,4]
    assert(
      lib.sumOfPrimes(arr) == undefined
    )
  })
  it ("should return undefined for float", function() {
    assert(
      lib.sumOfPrimes(4.3) == undefined
    )
  })  
  it("should return undefined for -ve value", function() {
    assert(
      lib.sumOfPrimes(-2) == undefined);
  });
  it("should return undefined for no input", function() {
    assert(
      lib.sumOfPrimes("") == undefined
    )
  })
  it("should return undefined if input is string", function() {
    assert(
      lib.sumOfPrimes("str") == undefined
    );
  })
  
  it ("should return undefined for string", function () {
  assert(
    lib.sumOfPrimes("boy") == undefined
  )
  })
});
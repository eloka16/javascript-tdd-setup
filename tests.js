
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
});
require('chai').should();

const fizzBuzz = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {
	// test normal case
  it('check if a number is divisible by 15, 5, or 3 and give the appropriate response', function() {
		// range of representative inputs
    const normalCase = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'}
    ];
    normalCase.forEach(function(input) {
      const answer = fizzBuzz(input.a);
      answer.should.equal(input.expected);
    });
  });
  // test edge case
  it('raise an error if input is NaN', function() {
    const invalidInputs = [
      ['string'],
      [true],
      ['1']
    ];
    invalidInputs.forEach(function(input) {
      (function() {
        fizzBuzz(input)
      }).should.throw(Error);
    });
  });
});

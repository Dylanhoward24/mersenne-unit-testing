const { TestWatcher } = require('@jest/core');
const fizzBuzz = require('../fizzbuzz');

test('3 should return FIZZ', () => {
    let result = fizzBuzz(3);

    expect(result).toBe('FIZZ');
});

test('6 should return FIZZ', () => {
    let result = fizzBuzz(6);

    expect(result).toBe('FIZZ');
});

test('10 should return BUZZ', () => {
    let result = fizzBuzz(10);

    expect(result).toBe('BUZZ');
});
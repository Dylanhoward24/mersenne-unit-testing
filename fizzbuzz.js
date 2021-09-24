/**
 * FizzBuzz
 * 
 * Wite a function that takes a number
 * 
 * If the number is divisible by 3, return "FIZZ"
 * If the number is divisible by 5, return "BUZZ"
 * If the number is divisible by both 3 & 5, return "FIZZBUZZ"
 * Otherwise, return null;
**/

function fizzBuzz(number) {
    if (isDivisibleBy(number, 3)) {
        return 'FIZZ';
    } else if (isDivisibleBy(number, 5)) {
        return 'BUZZ';
    }
}

function isDivisibleBy(number, target) {
    return number % target === 0;
}

console.log('3 should return FIZZ', fizzBuzz(3));
console.log('36 should return FIZZ', fizzBuzz(36));

module.exports = fizzBuzz;
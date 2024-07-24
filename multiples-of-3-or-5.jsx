// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//My Solution:

function solution(number) {
  if (number <= 0) {
    return 0;
  } else {
    const array = [];
    for (let i = 1; i < number; i++) {
      if (i * 3 < number && !array.includes(i * 3)) {
        array.push(i * 3);
      }
      if (i * 5 < number && !array.includes(i * 5)) {
        array.push(i * 5);
      }
    }
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }
}

function printDivisibleByThreeNotByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
  
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      } else {
        continue;
      }
    }
  }
  
  // Example usage
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printDivisibleByThreeNotByTwo(numbers);
  
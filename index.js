function randomArray(size = 10) {
  let array = [];

  for(let i = 0; i < size; i++) {
    const randomNumber = Math.random() * 20 - 10
    array.push(Math.round(randomNumber));
  }
  
  return array;
}

let array = randomArray();
console.log('Array:');
console.log(array);

// const decrease = array.map(x => x - 1);
// console.log(decrease);

// const divByTwo = array.map(x => x / 2);
// console.log(divByTwo);

// const divByTwoTrue = array.filter(x => x % 2 === 0);
// console.log(divByTwoTrue);

  // const checkVowels = words.filter(x => x === vowelsArray[i] ? counter + 1 : x, 0)
  // console.log(checkVowels, counter);

// const divByTwoFalse = array.filter(x => x % 2 !== 0);
// console.log(divByTwoFalse);

// const areNegatives = array.filter(x => x < 0);
// console.log(areNegatives);

// const amountNegatives = array.filter(x => x < 0).length;
// console.log(amountNegatives);

// const xyFunction = array.map(x => x < 0 ? - 2 * x : x);
// console.log(xyFunction);

// WRONG
// const negativesSum = array.reduce((acc, x) => x < 0 ? acc + x : x, 0);
// console.log(negativesSum)

// RIGHT
// const negativesSum = array.reduce((acc, x) => x < 0 ? acc + x : acc, 0);
// console.log(negativesSum);

// const negativesAmount = array.reduce((acc, x) => x < 0 ? acc + 1 : acc, 0);
// console.log(negativesAmount);

// const negativesProduct = array.reduce((acc, x) => x < 0 ? acc * x : acc, 1);
// console.log(negativesProduct);

// const hasNegativeNumbers = array.some(x => x === 7);
// const foundIndex = array.findIndex(x => x === 7);
// console.log(hasNegativeNumbers, foundIndex);

// const hasNumbersBetween = array.some(x => x >= 0 && x < 4);
// console.log(hasNumbersBetween);

// const hasNumbers = array.some(x => x === 10) && array.some(x => x === -10);
// console.log(hasNumbers);

//Random array until all even

// while(true) {  
//   console.log(array);
//   const hasOnlyEven = array.every(x => x % 2 === 0);
  
//   if(hasOnlyEven) {
//     break;
//   }
//   array = randomArray();
// }





// Implement solutions to the tasks here

// const numbers = [14, 16, -25, 33];

// const result = [];

// for (let number of numbers) {
//   result.push(number * 2);
// }

//written out function
//const resultTwo = numbers.map(function(x) {return x * 2});

//short version
// const resultTwo = x => x * 2;
// return x * 2


//FILTER

//const result = [];
//for (let i number of numbers) {
//  if (number > 10) result.push(number);
//}


//V 1
//function moreThan10(number) {
//  const isMoreTHan10 = number > 10;
//  return isMoreThan10;
//}

//V 2
//const moreThan10 = (number) => number > 10;
//const result = numbers.filter(moreThan10);


//THE FINAL FORM
// const resultFilter = numbers.filter(x => x > 10)

// console.log(resultFilter);

//REDUCE


// function add(result, number) {
//   return result + number;
// }

// const resultSum = 0;

// for (number of numbers) {
//   resultSum = add(resultSum, number);
// }

// console.log(resultSum);

//v 2

// function add(resultSum, number) {
//   return resultSum + number;
// }

// const sum = numbers.reduce(add, 0);

//FINAL FORM

// const resultSum = number.reduce((acc, x) => acc + x, 0);
// console.log(sum);


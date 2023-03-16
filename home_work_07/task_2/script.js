let arr = ['Dog', 4, 'Cat', 6, 8];

const getAverage = (numbers) => {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i]) === true) { continue }
      else { sum += Number(numbers[i]) }
   }
   return sum / numbers.length;
};

console.log(getAverage(arr));
let sum = (function () {
   let accumulator = 0;
   return function (increment) {
      return accumulator += increment;
   }
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
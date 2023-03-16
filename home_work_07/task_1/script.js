let array = [1, 2, 3, 4, 5, 6, 7]; // С const не работает
array = array.filter(
   function deleteItems(array) {
      return array != 5
   }
);
console.log(array);
function delLatter(str, latters) {
   let result = str;
   for (let latter of latters) {
      result = result.replaceAll(latter, '');
   }
   return result;
}
console.log(delLatter('Hello World', ['l', 'd']));
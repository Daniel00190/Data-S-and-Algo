var maxProfit = function (prices) {
   let min = Number.MAX_VALUE;
   let max = 0;
   for (p of prices) {
      if (p < min) min = p;
      max = Math.max(max, p - min);
   }

   return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

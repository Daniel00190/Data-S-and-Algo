//brute force aproach
var missingNumber = function (nums, map = new Map()) {
   for (let num of nums) {
      map.set(num, true);
   }
   for (let i = 0; i < nums.length + 1; i++) {
      if (!map.has(i)) return i;
   }
};
var missingNumber = function (nums) {
   let sum = 0;
   for (let num of nums) {
      sum += num;
   }
   for (let i = 0; i < nums.length + 1; i++) {
      sum -= i;
   }
   return Math.abs(sum);
};
var missingNumber = function (nums) {
   let sum = 0;
   for (let num of nums) {
      sum += num;
   }
   let n = nums.length + 1;
   console.log((n * (n - 1)) / 2 - sum);
   return (n * (n - 1)) / 2 - sum;
};

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums));

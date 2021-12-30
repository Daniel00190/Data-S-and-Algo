var maxAbsoluteSum = function (nums) {
   for (let i = 1; i < array.length; i++) {
      array[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
   }

   return Math.max(...array);
};
// positive maximum absolute sum of sub-arrays
var pmaxAbsoluteSum = (nums) => {
   var max = 0;
   var min = 0;
   var s = 0;
   for (i of nums) {
      s += i;
      max = Math.max(max, s);
      min = Math.min(min, s);
   }
   return max - min;
};

let array = [2, -34, 8, 15, -15, 3, -8, 10];
console.log(maxAbsoluteSum(array));
console.log(pmaxAbsoluteSum(array));

console.log(Math.abs(-5 + 1 - 4));

function test(arr) {
   sum = 0;
   var max = 0;
   var min = 0;
   let result = [max, min, sum];
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      max = Math.max(max, sum);
      min = Math.min(min, sum);
      result = [max, min, sum];
   }
   return result;
}

console.log(test([2, 8, -5, 8, 1, -4, 3, -2]));
console.log(test([9, 2, -5, 1, -14, 15, -3, -2]));
console.log(test([2, 8, -5, 8]));

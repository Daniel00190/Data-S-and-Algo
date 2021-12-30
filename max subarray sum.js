var maxSubArray = function (nums) {
   for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
      console.log(nums[i]);
      console.log(nums);
   }

   return Math.max(...nums);
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));

var maxSubArray = function (nums) {
   let max = nums[0];
   let curr = max;
   for (let i = 1; i < nums.length; i++) {
      curr = Math.max(nums[i], nums[i] + curr);
      max = Math.max(curr, max);
   }
   return max;
};

let nums = [2, -8, 8, -11, 1, 9];
console.log(maxSubArray(nums));
console.log(nums);

function arr(array) {
   for (let i = 1; i < array.length; i++) {
      array[i] = array[i] + array[i - 1];
   }
   return array;
}

console.log(arr([4, 6, 78, 3, 5]));

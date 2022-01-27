var threeSum = function (nums) {
   nums.sort((a, b) => a - b);

   let results = [];
   for (let i = 0; i < nums.length; i++) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
         const sum = nums[i] + nums[j] + nums[k];
         if (sum === 0) {
            results.push([nums[i], nums[j], nums[k]]);

            while (j < k && nums[j] == nums[j + 1]) {
               j++;
            }
            j++;

            while (k > j && nums[k] == nums[k - 1]) {
               k--;
            }
            k--;
         } else if (sum < 0) {
            j++;
         } else {
            k--;
         }
      }

      while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
         i++;
      }
   }

   return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//sort input, for each first element,
// find next two where -a = b+c, if a=prevA, skip a,
//if b=prevB skip b to elim duplicates;
//to find b,c use two pointers, left/right on remaining list

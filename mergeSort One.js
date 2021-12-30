var mergeSort = function (nums) {
   if (nums.length < 2) return nums;
   var middleIndex = Math.floor(nums.length / 2);
   var left = nums.slice(0, middleIndex);
   var right = nums.slice(middleIndex, nums.length);
   console.log("left", left);
   console.log("right", right);

   function merge(leftArray, rightArray) {
      var result = [],
         leftArrayLength = leftArray.length,
         rightArrayLegth = rightArray.length,
         leftPointer = 0,
         rightPointer = 0;
      while (leftPointer < leftArrayLength && rightPointer < rightArrayLegth) {
         if (leftArray[leftPointer] < rightArray[rightPointer]) {
            result.push(leftArray[leftPointer++]);
            console.log("left array", leftArray);
         } else {
            console.log("right array", rightArray);
            result.push(rightArray[rightPointer++]);
         }
      }
      console.log("result", result);
      return result
         .concat(leftArray.slice(leftPointer))
         .concat(rightArray.slice(rightPointer));
   }
   return merge(mergeSort(left), mergeSort(right));
};
console.log("mergeSort", mergeSort([5, 3, 7, 10, 4, 1, 5]));
//----------------------------------------------------------------------//
const sortArray = (nums) => {
   if (nums.length <= 1) return nums;

   const middle = Math.floor(nums.length / 2);
   const left = nums.slice(0, middle);
   const right = nums.slice(middle);

   return merge(sortArray(left), sortArray(right));
};

const merge = (left, right) => {
   const result = [];

   while (left.length && right.length) {
      if (left[0] <= right[0]) {
         result.push(left.shift());
      } else {
         result.push(right.shift());
      }
   }

   return [...result, ...left, ...right];
};

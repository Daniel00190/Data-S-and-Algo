var mergeSort = function (nums) {
   if (nums.length < 2) return nums;
   var mid = Math.floor(nums.length / 2);
   var left = nums.slice(0, mid);
   var right = nums.slice(mid);

   function merge(left, right) {
      var result = [],
         lLen = left.length,
         rLen = right.length,
         l = 0,
         r = 0;
      while (l < lLen && r < rLen) {
         if (left[l] < right[r]) {
            result.push(left[l++]);
         } else {
            result.push(right[r++]);
         }
      }
      return result.concat(left.slice(l)).concat(right.slice(r));
   }

   return merge(mergeSort(left), mergeSort(right));
};
//-----------------------------------------------------------//
var bubbleSort = (nums) => {
   for (var k = nums.length - 1; k >= 1; k--) {
      for (var i = 0; i < k; i++) {
         if (nums[i] > nums[i + 1]) {
            swap(i, i + 1);
         }
      }
   }
   function swap(i, j) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
   }
   return nums;
};
//-----------------------------------------------------------//
var quickSort = (nums) => {
   function quickSortHelper(nums, start, end) {
      if (start >= end) return nums;

      var pivotValue = nums[start];
      var smaller = start;
      for (var i = start + 1; i <= end; i++) {
         var bigger = i;
         if (nums[bigger] < pivotValue) {
            smaller++;
            var smallerValue = nums[bigger];
            nums[bigger] = nums[smaller];
            nums[smaller] = smallerValue;
         }
      }
      var smallerCache = nums[smaller];
      nums[smaller] = nums[start];
      nums[start] = smallerCache;

      quickSortHelper(nums, start, smaller - 1);
      quickSortHelper(nums, smaller + 1, end);
      return nums;
   }

   return quickSortHelper(nums, 0, nums.length - 1);
};
//-----------------------------------------------------------//
var selectionSort = (nums) => {
   var n = nums.length;
   for (var i = 0; i < n - 1; i++) {
      var min = i;
      for (var j = i + 1; j < n; j++) {
         if (nums[j] < nums[min]) {
            min = j;
         }
      }
      var temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
   }
   return nums;
};
//-----------------------------------------------------------//

function insertionSort(nums) {
   for (var i = 1; i < nums.length; i++) {
      var value = nums[i];
      var hole = i;
      while (hole > 0 && nums[hole - 1] > value) {
         nums[hole] = nums[hole - 1];
         hole = hole - 1;
      }
      nums[hole] = value;
   }
   return nums;
}

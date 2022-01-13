var merge = function (nums1, m, nums2, n) {
   var insertPos = m + n - 1;
   m--;
   n--;
   while (n >= 0) {
      //SIMPLIFIED IF STATEMENT WHILE DECREASING
      //   nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
      if (nums1[m] > nums2[n]) {
         nums1[insertPos--] = nums1[m];
         m--;
      } else {
         nums1[insertPos--] = nums2[n];
         n--;
      }
   }

   return nums1;
};

let nums1 = [1, 2, 4, 0, 0, 0];
let nums2 = [2, 3, 4];
console.log(merge(nums1, 3, nums2, 3));

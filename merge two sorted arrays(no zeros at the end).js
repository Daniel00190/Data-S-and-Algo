var merge = function (nums1, nums2) {
   let mergeArray = [];

   while (nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
         mergeArray.push(nums1.shift());
      } else {
         mergeArray.push(nums2.shift());
      }
   }
   mergeArray.push(...nums2, ...nums1);
   return mergeArray;
};

let nums1 = [1, 2, 4, 9, 15];
let nums2 = [2, 5, 6, 18];
console.log(merge(nums1, nums2));

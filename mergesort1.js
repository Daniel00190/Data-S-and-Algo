/*
Merge Sort Algorithm
Time Complexity, Worst Case O(n log n)
Sorting By Splitting Arrays
*/

const mergeSort = (array) => {
   //Check if array can be split
   if (array.length < 2) return array;
   //Get Middle index
   const middle = Math.floor(array.length / 2);
   //Split Array In Two Sides
   const leftSide = array.slice(0, middle);
   const rightSide = array.slice(middle, array.length);
   //Use recusion to continue splitting
   console.log("split:", leftSide, rightSide);
   //An array of length 1 cannot be split, ready for merge
   //Merge selected arrays back together, in sorted order
   //Select the minimum of the two values
   //Add the selected value to the sorted array
   //When one list becomes empty, copy all values from the remaining array into the sorted array
   //Finished merging
   //Select the right subarray
   let endResult = merge(mergeSort(leftSide), mergeSort(rightSide));
   console.log("end result", endResult);
   return endResult;
};
const merge = (leftArray, rightArray) => {
   //Create New Array
   const result = [];
   //Check if left array and right array is empty
   while (leftArray.length && rightArray.length) {
      //Find lower value
      if (leftArray[0] <= rightArray[0]) {
         //Add left value
         result.push(leftArray.shift());
      } else {
         //Add right value
         result.push(rightArray.shift());
      }
      console.log("result:", result);
   }
   //Merge left array
   while (leftArray.length) result.push(leftArray.shift());
   //Merge right array
   while (rightArray.length) result.push(rightArray.shift());
   console.log("result:", result);
   //return result array
   return result;
};

console.log(mergeSort([5, 2, 1, 8, 3]));

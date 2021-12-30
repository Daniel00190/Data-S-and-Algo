function bubbleSort(array) {
   let arrL = array.length;
   for (let i = 0; i < arrL; i++) {
      for (let j = 0; j < arrL - i - 1; j++) {
         console.log(arrL - i - 1);

         if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
         }
      }
   }
   return array;
}

let array = Array.from(
   {
      length: 100000,
   },
   () => Math.random() * 18
);

console.log(bubbleSort(array));

//bubble sort with a while loop

function myFunc(array) {
   let wasSwapped = true;
   while (wasSwapped) {
      wasSwapped = false;
      for (let i = 0; i < array.length - 1; i++) {
         if (array[i] > array[i + 1]) {
            wasSwapped = true;
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
         }
      }
   }
   return array;
}
let array = Array.from(
   {
      length: 100000,
   },
   () => Math.random() * 18
);
console.log(myFunc(array));

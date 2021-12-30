function myFunc(array) {
   let wasSwapped = true;
   do {
      wasSwapped = false;
      for (let i = 0; i < array.length - 1; i++) {
         if (array[i] > array[i + 1]) {
            wasSwapped = true;
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
         }
      }
   } while (wasSwapped);

   return array;
}

let array = [];
let l = 10;
for (let i = 0; i < l; i++) {
   array.push(Math.floor(Math.random() * l));
}

console.log(myFunc(array));

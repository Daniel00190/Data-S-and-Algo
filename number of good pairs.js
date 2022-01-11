var numIdenticalPairs = function (nums) {
   const map = new Map();
   let count = 0;

   for (const number of nums) {
      if (map[number]) {
         count += map[number];
         console.log(map[number]);
         map[number] += 1;
      } else {
         map[number] = 1;
      }
   }
   console.log(map);
   console.log(count);
   return count;
};

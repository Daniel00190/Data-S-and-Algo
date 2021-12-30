var mySqrt = function (x) {
   let result = Math.trunc(Math.sqrt(x));
   return result;
};

var mySqrt = function (x) {
   let result = 1;

   while (result * result <= x) result++;
   return result - 1;
};

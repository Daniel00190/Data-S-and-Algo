//=====POW RECURSIVE FUNCTION====//
function pow(number, power) {
   if (power === 1) {
      return number;
   }
   console.log(power);
   return number * pow(number, power - 1);
}
console.log(pow(2, 25));

//---------POW WHILE LOOP-----//
function pow1(number, power) {
   let total = 1;
   while (power > 0) {
      total *= number;
      power--;
   }
   return total;
}
console.log(pow1(2, 25));

//---------FACTORIAL RECURSIVE---------//
function factorial(number) {
   if (number === 1) {
      console.log(number);
      return 1;
   }
   return number * factorial(number - 1);
}
console.log(factorial(14));

//---------FACTORIAL WHILE LOOP-----//
function factorial1(number) {
   let i = number;
   while (i > 1) {
      number *= i - 1;
      i--;
   }
   return number;
}
console.log(factorial1(4));

//-------FACTORIAL FOR LOOP------//
function factorial2(number) {
   for (let i = number - 1; i > 1; i--) {
      number *= i;
   }
   return number;
}

console.log(factorial2(14));

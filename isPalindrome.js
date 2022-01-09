function isPalindrome(input) {
   if (input.length == 0 || input.length == 1) return true;

   if (input.charAt(0) == input.charAt(input.length - 1)) {
      return isPalindrome(input.substring(1, input.length - 1));
   }

   return false;
}

console.log(isPalindrome("racecar"));
//------------------------------------------------------------------------------------------//
const isPalindrome = (s) => {
   s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      if (s.charAt(i) !== s.charAt(j)) return false;
   }
   return true;
};
//------------------------------------------------------------------------------------------//
//THIS LAST ONE WORKS WITH ALL CASES EXCEPT A VERY LARGE STRING, ACCORDING TO LEETCODE
function isPalindrome(string) {
   string = string.toLowerCase().replace(/[_\W]/g, "");
   let newString = "";
   for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
      console.log(newString);
   }
   return newString === string;
}

console.log(isPalindrome("racecar"));

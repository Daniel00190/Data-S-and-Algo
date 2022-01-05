var isValid = function (s) {
   if (s.length === 0) return true;
   if (s.length === 1 || s.length % 2 !== 0) return false;

   let stack = [];

   for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
         stack.push(")");
      } else if (s[i] === "[") {
         stack.push("]");
      } else if (s[i] === "{") {
         stack.push("}");
      } else {
         //encountered a closing bracket
         //if stack is empty all we encounter before was closing brackets
         if (stack.length == 0 || s[i] !== stack.pop()) return false;
      }
   }
   return stack.length == 0;
};

console.log(isValid("[]{}{}"));
console.log(isValid(""));
console.log(isValid("[{{}}]"));
console.log(isValid("){[{]}}"));
console.log(isValid("}}}]"));
console.log(isValid("}]"));

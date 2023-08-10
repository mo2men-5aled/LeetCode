/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
const rules = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  
  let result = num;
  let romanString = "";

  let nums = Object.keys(rules);

  if (result >= 0) {
    nums.reverse().map((num) => {
      while (result >= num) {
        result -= num;
        romanString += rules[num];
      }
    });

    return romanString;
  }
    
};
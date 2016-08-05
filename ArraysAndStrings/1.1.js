'use strict';
// IsUnique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

/*

Input: string - example: "unobtrusively"
Output: Boolean - false
Constraints: Best time, constant space 


examples:

console.log(allUnique("unobtrusively")); // false
console.log(allUnique("abcdefg")); // true
console.log(allUnique("")); // "not a string"
console.log(allUnique(null)); // "not a string"
console.log(allUnique(undefined)); // "not a string"
console.log(allUnique({key:"value"})); // "not a string"
console.log(allUnique([1,3,4])); // "not a string"

*/

function allUnique(string){
  const type = typeof string;
  if (type === undefined) {
    return "Input is Not A String"
  }

  const hash = {};
  const storage = {
    object: () => console.log("Input is Not A String"),
    string: (string) => {
      for (let i = 0; i < string.length; i++ ){
        if (hash[string[i]] === undefined) {
          hash[string[i]] = 1;
        }
        else {
          return false;
        }
      }
      return true;
    },
    undefined: () => console.log("Input is Not A String")
  }

  // console.log(storage[type])
  return storage[type](string);
}

// console.log(allUnique("string"));
// allUnique({key: "value"})
// console.log(allUnique("unobtrusively")); // false
// console.log(allUnique("abcdefg")); // true
// console.log(allUnique("")); // "not a string"
// console.log(allUnique(null)); // "not a string"
console.log(allUnique(undefined)); // "not a string"
// console.log(allUnique({key:"value"})); // "not a string"
// console.log(allUnique([1,3,4])); // "not a string"
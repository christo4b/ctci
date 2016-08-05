'use strict';
// Palindrome Permutation: Given a string, write a function to check if it is a Permutation
// of a palindrome.

// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta");



function palindromePerm(str){

  if (typeof str !== 'string'){
    return false;
  }
  
  let storage = new Set();
  for (let char of str){
    if (char !== ' '){
      if (storage.has(char)){
        storage.delete(char);
      } else {
        storage.add(char);
      }
    }
  }

  return storage.size <= 1;
}


console.log(palindromePerm("isabel belisa")); // true
console.log(palindromePerm("abcd d dd"));  // false
console.log(palindromePerm("racecar dad")); // true


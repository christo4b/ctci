'use strict';
/*
Given two strings, write a function that checks to see if one is a permutation of the other one.

console.log(checkPerm("taco", "coat")); // true
console.log(checkPerm("taco", "cott")); // false
console.log(checkPerm("taco", "tacotaco")); // false??

*/


// If the two strings have different lengths, return false

// Sort the two strings, and then compare them

function checkPerm(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();

  for (let i = 0; i < str1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}


console.log(checkPerm("taco", "coat")); // true
console.log(checkPerm("taco", "cott")); // false
// console.log(checkPerm("taco", "tacotaco")); // false??

// You could iterate through the first thing and then take that value and check for its presence in teh second string, that's a horrible solution

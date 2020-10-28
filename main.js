const Array = require("./array");
const Memory = require("./memory");
function main() {
  Array.size_ratio = 3;
  const memory = new Memory();
  let arr = new Array();

  arr.push("tauhida");
  console.log(arr.get(0));
}
//main()

function URLifyString(string) {
  let newString = "";
  let replacement = "%20";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newString = newString + "%20";
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
}
//URLifyString('www.thinkful.com /tauh ida parv een')

function filterArr(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      arr.splice(i, 1);
      filterArr(arr, num);
    }
  }
  return arr;
}
//filterArr([5,4,5,6,3,2,1,7], 5)

function maxSum(arr) {
  let high = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > high) {
      high = sum;
    }
  }
  return high;
}

//maxSum([4, 6, -3, 5, -2, 1])

function mergeArr(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}
//mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])

function removeCharacters(string, characters) {
  let removalCharacters = [];
  let newString = "";
  for (let i = 0; i < characters.length; i++) {
    removalCharacters.push(characters[i]);
  }
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < removalCharacters.length; j++) {
      if (string[i] === removalCharacters[j]) {
        break;
      } else if (j === removalCharacters.length - 1) {
        newString = newString + string[i];
      }
    }
  }
  return newString;
}
removeCharacters("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");

function products(arr) {
  let result = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        total = total * arr[j];
      }
      if (j === arr.length - 1) {
        result.push(total);
      }
    }
  }
  return result;
}

//products([1, 3, 9, 4])
function zeroSetter(arr) {
  let found = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        found.push([i, j]);
      }
    }
  }
  for (let i = 0; i < found.length; i++) {
    arr[found[i][0]].fill(0);
    for (let j = 0; j < arr.length; j++) {
      arr[j][found[i][1]] = 0;
    }
  }
  console.log(found);
  return arr;
}
// zeroSetter([[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]])

function isStringRotated(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let newChar = "";
  let newString;
  for (let i = 0; i < string1.length; i++) {
    newChar = string2[0];
    newString = string2.slice(1);
    string2 = newString + newChar;
    console.log(string2);
    if (string1 === string2) {
      return true;
    }
  }
  return false;
}
isStringRotated("amazon", "azonam");

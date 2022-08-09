function solution(inputArray) {
    let lengthOfDeLongestString = 0
    let result = []
    for (let index = 0; index < inputArray.length; index++) {
        const elementLength = inputArray[index].length;
        if (elementLength > lengthOfDeLongestString) {
            lengthOfDeLongestString = elementLength
        }      
    }
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        if(element.length == lengthOfDeLongestString) {
            result.push(element)
        } 
    }
    console.log(result)
    return result
}

let inputArray = [
    "aba", 
    "aa", 
    "vcd", 
    "ad", 
    "aba"
]

solution(inputArray)
// Codewriting

// 300

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.
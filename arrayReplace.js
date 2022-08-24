function solution(inputArray, elemToReplace, substitutionElem) {
    let indexElementToReplace = -1
    while (inputArray.indexOf(elemToReplace,indexElementToReplace+1) != -1) {
        indexElementToReplace = inputArray.indexOf(elemToReplace,indexElementToReplace+1)
        inputArray[indexElementToReplace] = substitutionElem
    }
    console.log(inputArray)
    return inputArray
}

const inputArray = [1, 2, 1, 1, 1]
const elemToReplace = 1
const substitutionElem = 2

solution(inputArray,elemToReplace,substitutionElem)

// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 0 ≤ inputArray.length ≤ 104,
// 0 ≤ inputArray[i] ≤ 109.

// [input] integer elemToReplace

// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 109.

// [input] integer substitutionElem

// Guaranteed constraints:
// 0 ≤ substitutionElem ≤ 109.

// [output] array.integer
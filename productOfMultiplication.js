function solution(inputArray) {
    let result = inputArray[0] * inputArray[1]
    for (let index = 0; index < inputArray.length-1; index++) {
        const element = inputArray[index];
        const adjacentElement = inputArray[index+1]
        const productOfMultiplication = element * adjacentElement
        if (productOfMultiplication > result) {
            result = productOfMultiplication
        }
    }
    return result
}

const inputArray = [3, 6, -2, -5, 7, 3]
solution(inputArray)

// Codewriting

// 300

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements
function solution(inputArray) {
    let result = 0
    for (let index = 1; index < inputArray.length; index++) {
        const element = inputArray[index];
        const previousElement = inputArray[index-1]
        if(element <= previousElement) {
            let increase = previousElement - element + 1
            let newElement = element + increase
            result = result + increase
            inputArray[index] = newElement
        }
    }
    console.log(result)
    return result
}

const inputArray = [1, 1, 1]

solution(inputArray)

// Codewriting

// 300

// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// -105 ≤ inputArray[i] ≤ 105.

// [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
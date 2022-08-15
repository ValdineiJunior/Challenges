function solution(inputArray) {
    let maximalDifferenceBetweenAdjacentElements = 0
    for (let index = 1; index < inputArray.length; index++) {
        const element = inputArray[index];
        const previousElement = inputArray[index-1]
        let differenceBetweenAdjacentElements = previousElement - element
        if (differenceBetweenAdjacentElements < 0) {
            differenceBetweenAdjacentElements = -differenceBetweenAdjacentElements
        } if (differenceBetweenAdjacentElements > maximalDifferenceBetweenAdjacentElements) {
            maximalDifferenceBetweenAdjacentElements = differenceBetweenAdjacentElements
        }
    }
    console.log(maximalDifferenceBetweenAdjacentElements)
    return maximalDifferenceBetweenAdjacentElements
}

inputArray = [2, 4, 1, 0]

solution(inputArray)

// Codewriting

// 300

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

// The maximal absolute difference.
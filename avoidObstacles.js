function solution(inputArray) {
    inputArray.sort((a,b) => a-b)
    let minimalLengthOfTheJump = 1
    const lastPoint = inputArray[inputArray.length-1]
    jump()
    function jump() {
        let pointToJump = minimalLengthOfTheJump
        for (let index = 1; pointToJump <= lastPoint; index++) {
            pointToJump = minimalLengthOfTheJump * index
            if (inputArray.includes(pointToJump)) {
                minimalLengthOfTheJump++
                jump()
            }
        }
    }
    console.log(minimalLengthOfTheJump)
    return minimalLengthOfTheJump
}

const inputArray = [2, 3]

solution(inputArray)

// Codewriting

// 300

// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Non-empty array of positive integers.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 1000,
// 1 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The desired length.
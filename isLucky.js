function solution(n) {
    let nToString = n.toString()
    let sumOfTheFirstdHalf = 0
    for (let index = 0; index < nToString.length/2; index++) {
        const element = parseInt(nToString[index])
        sumOfTheFirstdHalf = sumOfTheFirstdHalf + element
    }
    let sumOfTheSecondHalf = 0
    for (let index = nToString.length-1; index >= nToString.length/2; index--) {
        const element = parseInt(nToString[index])
        sumOfTheSecondHalf = sumOfTheSecondHalf + element
    }
    let result = sumOfTheFirstdHalf === sumOfTheSecondHalf
    console.log(result)
    return result
}

const n1 = 1230
const n2 = 239017

solution(n1)
solution(n2)


// Codewriting

// 300

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.
function solution(a, b) {
    let result = true
    let differentElements = 0
    for (let index = 0; index < a.length; index++) {
        const elementA = a[index];
        const elementB = b[index];
        if (elementA != elementB) {
            differentElements++
        }
        if (differentElements > 2) {
            result = false
            break
        }
    }
    if (result == true) {
        for (let index = 0; index < a.length; index++) {
            a.sort((x,y)=> x-y)
            b.sort((x,y)=> x-y)
            const elementA = a[index];
            const elementB = b[index];
            if (elementA != elementB) {
                result = false
                break
            }
        }        

    }
    
    console.log(result)
    return result
}

const a = [1, 2, 1, 2, 2, 1]
const b = [2, 2, 1, 1, 2, 1]

solution(a,b)
// Codewriting

// 300

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Array of integers.

// Guaranteed constraints:
// 3 ≤ a.length ≤ 105,
// 1 ≤ a[i] ≤ 1000.

// [input] array.integer b

// Array of integers of the same length as a.

// Guaranteed constraints:
// b.length = a.length,
// 1 ≤ b[i] ≤ 1000.

// [output] boolean

// true if a and b are similar, false otherwise.
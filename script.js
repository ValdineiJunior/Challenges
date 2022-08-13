function solution(inputString) {
    let isEven = inputString.length % 2 == 0
    let singleElementTolerance = 0
    if (!isEven) {
        singleElementTolerance++
    }
    let uniqueElements = 0
    let counter = 0
    for (let i = 0; i < inputString.length; i++) {
        const element = inputString[i];
        let index = inputString.indexOf(element)
        if (index == -1) {
            uniqueElements++
        } else {
            while (index != -1) {
                counter++
                index = inputString.indexOf(element, index + 1)
            }
            if(counter % 2 != 0) {
                uniqueElements++
                inputString = inputString + element
                counter = 0
            }

        }
    }
    result = uniqueElements <= singleElementTolerance
    console.log(result)
}

const inputString = "zyyzzzzz"

solution(inputString)

// Codewriting

// 300

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
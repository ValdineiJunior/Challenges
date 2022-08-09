function solution(s1, s2) {
    commonCharacters = 0
    originalLength = s2.length
    for (let index = 0; index < s1.length; index++) {
        const element = s1[index];
        s2 = s2.replace(element, '') 
    }
    commonCharacters = originalLength - s2.length
    console.log(commonCharacters)
    return commonCharacters
}

const s1 = "aabcc"
const s2 = "adcaa"

solution(s1,s2)

// commonCharacterCount
// Codewriting

// 300

// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length < 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length < 15.

// [output] integer
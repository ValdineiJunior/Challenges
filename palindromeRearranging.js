function solution(inputString) {
  let lengthOfStringIsEven = inputString.length % 2 == 0
  let elementToleranceWithoutAPair = 0
  if (!lengthOfStringIsEven) {
    elementToleranceWithoutAPair = 1
  }
  let elementWithoutAPair = 0
  for (let i = 0; i < inputString.length; i++) {
    const element = inputString[i]
    let indexOfRepeatedElements = inputString.indexOf(element)
    let numberOfRepeatedElements = 0
    if (indexOfRepeatedElements == -1) {
      elementWithoutAPair++
    } else {
      while (indexOfRepeatedElements != -1) {
        numberOfRepeatedElements++
        indexOfRepeatedElements = inputString.indexOf(
          element,
          indexOfRepeatedElements + 1
        )
      }
      if (numberOfRepeatedElements % 2 != 0) {
        elementWithoutAPair++
        inputString = inputString + element
      }
    }
  }
  // prettier-ignore
  canBeRearrangedToFormAPalindrome = elementWithoutAPair <= elementToleranceWithoutAPair
  console.log(canBeRearrangedToFormAPalindrome)
  return canBeRearrangedToFormAPalindrome
}

const inputString1 = 'aabb'
const inputString2 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'
const inputString3 = 'abbcabb'
const inputString4 = 'zyyzzzzz'
const inputString5 = 'z'
const inputString6 = 'zaa'
const inputString7 = 'abca'
const inputString8 = 'abcad'
const inputString9 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa'
const inputString10 = 'abdhuierf'

solution(inputString1)
solution(inputString2)
solution(inputString3)
solution(inputString4)
solution(inputString5)
solution(inputString6)
solution(inputString7)
solution(inputString8)
solution(inputString9)
solution(inputString10)

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

function solution(inputString) {
  let openingParenthesesIndex = -1
  let closingParenthesesIndex = -1

  findTheIndexOfTheExpressionToReverse()
  while (openingParenthesesIndex != -1) {
    reverseExpression()
    findTheIndexOfTheExpressionToReverse()
  }

  function findTheIndexOfTheExpressionToReverse() {
    for (let index = 0; index < inputString.length; index++) {
      const element = inputString[index]
      if (element == '(') {
        openingParenthesesIndex = index
      } else if (element == ')') {
        closingParenthesesIndex = index
        break
      }
    }
  }

  function reverseExpression() {
    // prettier-ignore
    let expressionInParentheses = inputString.substring(openingParenthesesIndex,closingParenthesesIndex+1)
    let arrayExpressionInParentheses = expressionInParentheses.split('')
    let arrayreverseExpression = arrayExpressionInParentheses.reverse()
    arrayreverseExpression.pop()
    arrayreverseExpression.shift()
    let reverseExpression = arrayreverseExpression.toString()
    reverseExpression = reverseExpression.replaceAll(',', '')
    // prettier-ignore
    inputString = inputString.replace(expressionInParentheses,reverseExpression)
    openingParenthesesIndex = -1
    closingParenthesesIndex = -1
  }
  console.log(inputString)
  return inputString
}

const inputString = 'foo(bar)baz(blim)'
const inputString2 = '(bar)'

solution(inputString2)

// Codewriting

// 300

// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

// Guaranteed constraints:
// 0 ≤ inputString.length ≤ 50.

// [output] string

// Return inputString, with all the characters that were in parentheses reversed.

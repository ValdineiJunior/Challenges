function solution(inputString) {
    let indexOpenBracket = []
    let indexCloseBracket = []
    cutExpressionInParentheses()

    function cutExpressionInParentheses() {
        indexOpenBracket = inputString.indexOf('(')
        indexCloseBracket = inputString.lastIndexOf(')')
        reverseExpression()
        function reverseExpression() {
            let expressionInParentheses = inputString.substring(indexOpenBracket,indexCloseBracket+1)
            console.log(expressionInParentheses)
            let arrayExpressionInParentheses = expressionInParentheses.split('')
            let arrayreverseExpression = arrayExpressionInParentheses.reverse()
            arrayreverseExpression.pop()
            arrayreverseExpression.shift()
            let reverseExpression = arrayreverseExpression.toString()
            reverseExpression = reverseExpression.replaceAll(',','')
            inputString = inputString.replace(expressionInParentheses, reverseExpression)
        }

        }
        
    console.log(inputString)
    return inputString
}

const inputString = "foo(bar)baz(blim)"
const inputString2 = "foo(bar(baz))blim"

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
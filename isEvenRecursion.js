function isEvenRecursion(number) {
    let recursionNumber = number
    let result = true

    function changeNegativeNumbersToPositive() {
        recursionNumber = -recursionNumber 
    }

    if (recursionNumber < 0) {
        changeNegativeNumbersToPositive()       
    }

    
    function reduceToZeroOrOne() {
        recursionNumber -= 2
        if (recursionNumber >= 1) {
            reduceToZeroOrOne()
        }
    }

    reduceToZeroOrOne()
    result = recursionNumber == 0

    return result
}

console.log(isEvenRecursion(10));
// → true
console.log(isEvenRecursion(75));
// → false
console.log(isEvenRecursion(-21));
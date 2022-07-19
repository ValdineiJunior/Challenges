function smallestNumber(firstNumber,secondNumber) {
    result = 0
    if(firstNumber>secondNumber) {
        result = secondNumber
    } else {
        result = firstNumber
    }
    return result
}

console.log(smallestNumber(0, 10));
console.log(smallestNumber(0, -10));
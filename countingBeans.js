function countingBeans(string,char) {
    let counter = 0
    for (let index = 0; index < string.length; index++) {
        if (string.charAt(index) === char)
        counter = counter + 1;
    }
    return counter
}

console.log(countingBeans('BBC', 'B'));
// → 2
console.log(countingBeans('kakkerlak', 'k'));
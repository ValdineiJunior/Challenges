function reverseArray(array) {
    result = []
    array.forEach(element => {
        result.unshift(element)
    });
    return result
}

function reverseArrayInPlace(array) {
    
    for (let index = 0; index < Math.floor(array.length/2); index++) {
        const firstMidleElement = array[index];
        const secondMidleElement = array[array.length -1 - index]
        array[index] = secondMidleElement
        array[array.length -1 - index] = firstMidleElement
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
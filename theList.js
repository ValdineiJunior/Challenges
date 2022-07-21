function arrayToList(array) {
    let list = {}
    let reverseArray = array.reverse()
    reverseArray.forEach(element => {
        list = {
            value: element,
            rest: list,
        }  
    });
    return list
}

function listToArray(list) {
    let array = []
    for (var node = list; node; node = node.rest) {
        if (node.value !== undefined) {
            array = [...array,node.value]
        }
    }
    return array
}

function prepend(element, list = {}) {
    newList = {
        value: element,
        rest: list,
    }
    return newList
}

function nth(list, index) {
    let counter = 0
    let elementInIndex = 0
    for (var node = list; node; node = node.rest)
        if (node.value !== undefined) {
            if (counter === index) {
                elementInIndex = node.value
            }
    counter++
    }
    return elementInIndex
}

console.log(arrayToList([10, 20, 30, 40, 50, 60]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
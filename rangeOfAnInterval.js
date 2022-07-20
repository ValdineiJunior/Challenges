function rangeOfAnInterval(start,end,increment = 1) {
    let range = []

    if (increment > 0) {
        for (; start <= end; start = start + increment) {
            range.push(start)
        }
    } else {
        for (; start >= end; start = start + increment) {
            range.push(start)
        }
    }
    return range
}

function sumOfRange(arrayOfRange) {
    let sum = 0
    arrayOfRange.forEach(element => {
        sum = sum + element
    });
    return sum
}

console.log(rangeOfAnInterval(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeOfAnInterval(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sumOfRange(rangeOfAnInterval(1, 10)));
// → 55
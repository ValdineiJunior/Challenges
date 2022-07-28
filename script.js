function solution(sequence) {
    function comparingRepeatedElements() {
        for (let index = sequence.length-1; index > 0; index--) {
            let lastElementEqual = sequence.pop()
            let firstElemetEqual = sequence.find(element => element == lastElementEqual)
            if (lastElementEqual == firstElemetEqual) {
                let indexOfFirstEqual = sequence.indexOf(lastElementEqual)
                amountElementToRemove++
                if (amountElementToRemove > 1) {
                    break
                }
                decidingWhichOfTheDuplicatesToRemove(index, indexOfFirstEqual)
            }         
        }
    }
    function decidingWhichOfTheDuplicatesToRemove(index, indexOfFirstEqual) {
        elementInIndex = sequence[index]
        elementBeforeIndex = sequence[index-1]
        if(elementBeforeIndex > elementInIndex) {
            removeElement(index)    
        } else {
            removeElement(indexOfFirstEqual)
        }
    }
    function removeElement(index) {
        sequence.splice(index,1)
    }
    let amountElementToRemove = 0
    let elementToCut = 0
    function compareElements() {
        for (let index = 0; index < sequence.length-1; index++) {
            const element = sequence[index];
            const nextElementToCompare = sequence[index+1]
            if (element >= nextElementToCompare) {
                amountElementToRemove++
                if (amountElementToRemove > 1) {
                    break
                }
                if (amountElementToRemove == 1) {
                   elementToCut = index 
                }
            }
        }            
    }
    compareElements()
    if (amountElementToRemove <= 1) {
        amountElementToRemove = 0
        comparingRepeatedElements()
    } if (amountElementToRemove <= 1) {
        amountElementToRemove = 0
        removeElement(elementToCut)
        compareElements()
        amountElementToRemove++
    }
    isStrictlyIncreasing = amountElementToRemove <= 1
    console.log(isStrictlyIncreasing)
    return isStrictlyIncreasing
}

sequence = [ 1, 2, 1, 2]
solution(sequence)

// Codewriting

// 300

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
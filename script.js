function solution(sequence) {
    let amountElementToRemove = 0

    function removeElement(index) {
        sequence.splice(index,1)
    }

    function compareEqualsElements() {
        for (let index = sequence.length-1; index > 0; index--) {
            console.log(index)
            const element = sequence[index];
            let indexOf = 0
            for (index; index > 0; index--) {
                sub--
                const previewsElementToCompare = sequence[index-sub]
                console.log(indexOf)
                if (element == previewsElementToCompare) {
                    console.log(element)
                    console.log(previewsElementToCompare)
                    amountElementToRemove = amountElementToRemove + 1
                    if (amountElementToRemove == 1) {
                        removeElement(index-1)
                        break
                    }
                }
            }            
        }            
    }

    function compareElements() {
        for (let index = 0; index < sequence.length-1; index++) {
            const element = sequence[index];
            const nextElementToCompare = sequence[index+1]

            if (element >= nextElementToCompare) {
                amountElementToRemove = amountElementToRemove + 1
                if (amountElementToRemove == 1) {
                    removeElement(index)
                    break
                }
            }
        }            
    }
    compareEqualsElements()
    compareElements()
    compareElements()
    isStrictlyIncreasing = amountElementToRemove <= 1
    console.log(sequence)
    return isStrictlyIncreasing
}

sequence = [1, 2, 3, 4, 3, 6]
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
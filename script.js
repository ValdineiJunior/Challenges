function solution(inputString) {
    result = false
    numbers = inputString.split(/[.]/)
    if (numbers.length == 4) {
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            let noLeadingZeros = element.search(/(0)\1/g) != 0
            let elementIsANumber = element.test(/[0-9]/g)
            // console.log(inputString, elementIsANumber)
            if (noLeadingZeros && elementIsANumber) {
                result = 0 > parseInt(element) < 255
            } else {
                result = false
                break
            }
        }
    }
    console.log(inputString, result)
    return result
}

const inputString0 = "172.16.254.1"
const inputString1 = "172.316.254.1"
const inputString2 = ".254.255.0"
const inputString3 = "1.1.1.1a"
const inputString4 = "1.23.256.255."
const inputString5 = "1.23.256.."
const inputString6 = "0..1.0"
const inputString7 = "64.233.161.001"

solution(inputString0)
solution(inputString1)
solution(inputString2)
solution(inputString3)
solution(inputString4)
solution(inputString5)
solution(inputString6)
solution(inputString7)


// Codewriting

// 300

// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of digits, full stops and lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 30.

// [output] boolean

// true if inputString satisfies the IPv4 address naming rules, false otherwise.
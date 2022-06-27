function timeConversion(s) {
    const formatHour = s.slice(-2)
    const minutesAndSeconds = s.slice(2,-2)
    let hourNumber = Number(s.slice(0,2))
    let hour = (s.slice(0,2))
    if(formatHour=='PM' && hourNumber<=11) {
        hourNumber +=12
        hour = `${hourNumber}`
    } if(formatHour=='AM' && hourNumber>=12) {
        hourNumber -=12
        hour = `0${hourNumber}`
    }
    const result = hour.concat(minutesAndSeconds)
    console.log(result)
    return result
}

const s = '12:45:54PM'
timeConversion(s)

// https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

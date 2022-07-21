function deepEqual(firstValue, secondValue) {
    firstValueIsObjetc = typeof firstValue == "object" && firstValue != null
    secondValueValueIsObjetc = typeof secondValue == "object" && secondValue != null
    let result
    if (firstValueIsObjetc && secondValue) {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                
            }
        }
    } else {
        result = firstValue === secondValue
    }
    return result
}
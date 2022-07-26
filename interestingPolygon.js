function solution(n) {

    let result = 1
    let progression = 0
    for (let index = 0; index < n-1; index++) {
        progression = progression + 4
        result = result + (progression)
        
    }
    console.log(result)
    return result
}

solution(3)
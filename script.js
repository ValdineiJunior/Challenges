function solution(arr) {
    for(var n=1; n < 200;n++) {
      console.log(arr.every(x=>x%n), n)


    }
        
  }

  const inputArray = [5, 3, 6, 7, 9]

solution(inputArray)
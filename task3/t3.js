function solution(A) {
  let result = 0
  let marker = 0

  let i = 0
  while(i<A.length){
    marker = A[i]

    let plus = 0
    let minus = 0
    let count = 0
    for(let a = 0 ; 0 < A[a]; a++){
      if(A[a] == marker)count++
    }

    minus=count
    plus=Math.abs(marker-count)
    result += Math.min(plus, minus)

    i += count
  }

  return result
}

console.log(solution([1,1,3,4,4,4]), " tulos pitäisi olla 3")
console.log(solution([1,2,2,2,5,5,5,8]), " tulos pitäisi olla 4")
console.log(solution([1,1,1,1,3,3,4,4,4,4,4]), " tulos pitäisi olla 5")
console.log(solution([10,10,10]), " tulos pitäisi olla 3")

function solution(A) {
  let result = 0
  let marker = 0

  let i = 0
  while(i<A.length){
    marker = A[i]

    let reduction = 0
    let count = 0
    for(let a = 0 ; 0 < A[a]; a++){
      if(A[a] == marker)count++
    }

    reduction=Math.abs(marker-count)
    result += Math.min(reduction, count)

    i += count
  }

  return result
}

const array1 = [1,1,3,4,4,4]
const array2 = [1,2,2,2,5,5,5,8]
const array3 = [1,1,1,1,3,3,4,4,4,4,4]
const array4 = [10,10,10]

console.log("with array [" + array1 + "] we should make it with 3 steps and solution returns " + solution(array1) + " steps")
console.log("with array [" + array2 + "] we should make it with 4 steps and solution returns " + solution(array2) + " steps")
console.log("with array [" + array3 + "] we should make it with 5 steps and solution returns " + solution(array3) + " steps")
console.log("with array [" + array4 + "] we should make it with 3 steps and solution returns " + solution(array4) + " steps")
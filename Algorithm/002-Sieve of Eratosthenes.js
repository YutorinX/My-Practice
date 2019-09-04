/*
Sieve of Eratosthenes(エラトステネスの篩)
ある数値以内のすべての素数を見つける
*/

function makePrimeArray(max) {
  let m = 2
  let n = 0
  const data = Array(max+1)
  const result = []
  data[0] = false
  data[1] = false
  
  do {
    // 素数の倍数を削除
    for (let i = 2 * m; i <= max; i += m) data[i] = false
    result[n] = m
    n++
    
    // 次の素数を検索する
    do {
      m++
    } while (data[m] !== undefined && m < max + 1)
  } while (m < max + 1)
  return result
}

console.log(makePrimeArray(100))


function makePrimeToConsole(max) {
  const result = Array(max + 1)
  result[0] = false
  result[1] = false
  
  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (result[i] === undefined) {
      for (let j = i * 2; j <= max; j += i) {
        result[j] = false
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) console.log(i)
  }
}

makePrimeToConsole(100)

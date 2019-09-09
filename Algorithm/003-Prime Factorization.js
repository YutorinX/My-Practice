/*
Prime factorization(素因数分解)
篩で全部求めてからやる無駄なやつと
素数が出るたびにそれで素因数分解できるか検証してから出すやつ
*/

// import eratosthenes from ("002-Sieve of Eratosthenes.js");
const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

function primeFactorization(num) {
//  primeNum = eratosthenes(num)
  let i = 0, n = num
  const pf = []
  
  do {
    while (n % primeNum[i] !== 0) i++
    
    pf.push(primeNum[i])
    n = n / primeNum[i]
    
  } while (n !== 1)
  
  return pf
}

console.log(primeFactorization(45))


function primeFactorization2(num) {
  let n = num, m = num, d
  const pf = []
  
  while (n !== 1) {
    
    do {
      m--
    } while (n % m !== 0)

    d = n / m
    
    let tmp
    do {
      pf.push(d)
      tmp = n / d
    } while (tmp === 0)
    
    n /= d
    m = n
  }
  
  return pf
}

console.log(primeFactorization2(45))

/*
Euclidean Algorithm(ユークリッドの互除法)
GCD of two numbers.
three num may be later.
*/
// a > b
/*
  const tmp
  if (a < b) {
    tmp = b
    b = a
    a = tmp
  }
*/

function EA(a, b) {
  let tmp
  do {
    tmp = a % b
    a = b
    b = tmp
  } while (tmp !== 0)
  return a
}

console.log(EA(2077, 1829))
console.log(EA(128, 72))

const RecursiveEA = (a, b) => {
    if (b === 0) return a
    return RecursiveEA(b, a % b)
}

console.log(RecursiveEA(2077, 1829))
console.log(RecursiveEA(128, 72))

/*
const CoEA = (a, b) => {
  return (b === 0) ? a : CoEA(b, a%b)
}

console.log(CoEA(128, 72))
*/

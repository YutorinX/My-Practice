/*
Binary Search(バイナリサーチ、二分探索)
O(log2n)なのでリニアよりめちゃ早い、けどソートできるデータが必要で、ソート済みなのが前提
*/

const list = [1, 2, 4, 6, 7, 8, 9]

function binarySearch(list, num) {
  // list.sort()
  
  let left = 0
  let right = list.length - 1

  for (let i = 0; i < Math.log2(list.length); i++) {

    let mid = Math.floor((left + right) / 2)
    
    if (list[mid] === num) {
      return mid
    } else if (list[mid] < num) {
      left = mid + 1
    } else if (list[mid] > num) {
      right = mid - 1
    }
  }
  
  return "Not Found"
}

console.log(`Location of ${4} is ${binarySearch(list, 4)}`)

/*
Bubble Sort(バブルソート、隣接交換法)
全部の隣り合った値を比べて、小さい方を前に移動させる
超簡単に作れるけど処理が多い
*/

const list = [4, 2, 5, 6, 1]

function bubbleSort(list, isDesc = false) {
  let tmp
  
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (isDesc ? list[i] < list[j] : list[i] > list[j]) {
        tmp = list[i]
        list[i] = list[j]
        list[j] = tmp
      } 
    }
  }
  return list
}

// えらいので第2引数にtrueを入れると逆になる
console.log(bubbleSort(list))

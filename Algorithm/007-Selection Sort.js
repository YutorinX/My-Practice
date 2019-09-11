/*
Selection Sort(選択ソート)
配列の最小値を探して、それを先頭の要素と交換する
バブルソートよりちょっと強い
*/

const list = [4, 2, 5, 6, 1, 3]

function selectionSort(list, isDesc = false) {
  let max,tmp
  
  for (let i = 0; i < list.length; i++) {
    max = i
    
    for (let j = i + 1; j < list.length; j++) {
      if ( isDesc ? list[max] < list[j] : list[max] > list[j]) {
        max = j
      }
    }
    
    if (max !== i) {
      tmp = list[i]
      list[i] = list[max]
      list[max] = tmp
    }
  }
  
  return list
}

// えらいので第2引数にtrueを入れると逆になる
console.log(selectionSort(list))

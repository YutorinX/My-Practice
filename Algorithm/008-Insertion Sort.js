/*
Insertion Sort(挿入ソート)
整列が終わってるとこをずらして先頭に挿入するやつ
varを使ってスコープをインチキしてます
*/

const list = [4, 2, 5, 6, 1, 3]

function insertionSort(list) {
  let tmp
  
  for (let i = 1; i < list.length; i++) {
    tmp = list[i]
    
    for (var j = i - 1; j >= 0; j--) {
      // 入れる値が現在の値より小さかったら、現在の値を後ろにずらす
      if (tmp < list[j]) {
        list[j + 1] = list[j]
      } else {
        break;
      }
    }

    list[j + 1] = tmp
  }
  
  return list
}

console.log(insertionSort(list))

/*
Shell Sort(シェルソート)
リストを幾つかに分けて、それぞれで挿入ソートを行って、隣同士を結合して詰めてまた挿入ソートをする
シェルさんが作ったソート
挿入ソートより早いけど、クイックソートよりは遅い
*/

const list = [41,23,55,36,14,32,59,90]


function shellSort(list) {
  let tmp
  //stepは飛ばす数で、forで間隔を半分にしていく
    
  for (let step = Math.floor(list.length / 2); step > 0; step = Math.floor(step / 2)){
    
    for (let i = step; i < list.length; i++) {
      // 挿入する値を一つづつ取り出していく
      tmp = list[i]

      // この値は一番うしろにあるから、前に向かって比較する
      for (var j = i; step <= j; j -= step) {
        //挿入ソートと同じ感じで、その値が小さかったらstep分だけ後ろにずらしていく
        //大きいのがあったら処理を止めて挿入する、けど前回と同じくvar使ってスコープを無視してます
        
        if (list[j - step] > tmp) {
          list[j] = list[j - step]
        } else {
          break;
        }
      }
      list[j] = tmp
    }
  }
  
  return list
}

console.log(shellSort(list))

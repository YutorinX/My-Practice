/*
Linear Search(リニアサーチ / 線形探索)
先頭から終端に向かって探し出すアルゴリズム、実装が単純だけどデータが多いやつには向かない安藤
IndexOf使えばいい話
*/

const list = [6, 5, 7, 2, 4]

function LinearSearch(list, element) {
    for (let i = 0; i <= list.length; i++) {
        if (list[i] === element)  return i
    }
    return -1
}

console.log(LinearSearch(list, 7))

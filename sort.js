// 冒泡排序

function bubbleSort(array) {
  let length = array.length;
  let flag = true;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = false;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (flag) {
      break;
    }
  }
  return array;
}

function insertSort (array) {
    let length = array.length
    for (let i = 1; i < length; i++) {
        for(let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]]
            } else {
                break
            }
        }
    }
    return array
}

let arr = [9, 3, 5, 2, 5, 6, 2, 6, 7, 3, 5, 8]
console.log(insertSort(arr))

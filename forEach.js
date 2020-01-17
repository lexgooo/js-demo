export function forEach(arr, callback) {
    let index = -1
    while(++index < arr.length) {
        if(callback(arr[index], index, arr) === false) {
            break
        }
    }
    return arr
}
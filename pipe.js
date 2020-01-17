module.exports = {
    pipe: (...args) => x => args.reduce((res, cb) => cb(res), x)
}

let dedup = (arr) => {
   return arr.reduce((prev, curr) => {
        !(prev.find(item => item.id === curr.id)) && arr.push(curr)
    }, [])
}

function memorize (fn) {
    let cache = {}
    return function () {
        let argStr = JSON.stringify(arguments)
        cache[argStr] = cache[argStr] || fn.apply(fn, arguments)
        return cache[argStr]
    }
}


let add = (a, b) => a + b

let res = memorize(add)

console.log(res(2, 2))

console.log(res(2, 2))

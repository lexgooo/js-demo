const _ = require('ramda')
let split = _.curry((separator, str) => {
    return str.split(separator)
})

let words = split(' ')

console.log(words('hello word'))
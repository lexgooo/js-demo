/**
 * 需求： 找出字符串数组中的空格并把它替换成下划线
 */
const curry = require('lodash').curry
let arr = ["hello world", "god", "foo", "bar", "foo bar"];

const match = curry(function(what, str) {
    return str.match(what)
})

const replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement)
})

const filter = curry(function(fn, ary) {
    return ary.filter(fn)
})

const map = curry(function(fn, ary) {
    return ary.map(fn)
})

const hasSpace = match(/\s+/g)
const filterSpaces = filter(hasSpace)
const match_1 = replace(/\s+/g)
const replaceSpace = match_1('_')
const arrReplaceSpace = map(replaceSpace)
console.log(arrReplaceSpace(arr))
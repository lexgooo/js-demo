const {pipe} = require('./pipe')

const add = x => x + 10
const multiply = y => y * 10
const sub = z => z - 10

test('等于10', () => {
    expect(pipe()(10)).toBe(10)
})

test('等于20', () => {
    expect(pipe(add)(10)).toBe(20)
})

test('等于 200', () => {
    expect(pipe(add, multiply)(10)).toBe(200)
})

test('等于 190', () => {
    expect(pipe(add, multiply, sub)(10)).toBe(190)
})
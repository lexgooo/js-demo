const {compose} =  require('./compose')

const add = x => x + 10
const multiply = y => y * 10
const subtraction = z => z - 10

test('to equal 10', () => {
    expect(compose()(10)).toBe(10)
})

test('to equal 20', () => {
    expect(compose(add)(10)).toBe(20)
})

test('to equal 200', () => {
    expect(compose(multiply, add)(10)).toBe(200)
})

test('to equal 190', () => {
    expect(compose(subtraction, multiply, add)(10)).toBe(190)
})
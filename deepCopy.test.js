const { deepCopy } = require('./deepCopy')

const x = {
    a: [1, 2, 3],
    b: {
      a: 3,
      b: 3
    }
  };
  
  const ar = [1, 2, 3];
  
  const y = {
    a: "z",
    [Symbol("z")]: "d"
  };
  
  const z = {
    a: "z",
    z: () => "d"
  };
  
  var r = {
    a: "z"
  };
  r.r = r;
  
test('深拷贝', () => {
    expect(deepCopy(x)).toStrictEqual(x)
    expect(deepCopy(ar)).toStrictEqual(ar)
    expect(deepCopy(y)).toStrictEqual(y)
    expect(deepCopy(z)).toStrictEqual(z)
})
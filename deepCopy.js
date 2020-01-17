// const deepCopy = source => {
//   if (typeof source !== "object") {
//     throw Error(`${source}不是引用数据类型，不需要深拷贝`);
//   }
//   let res;
//   if (source instanceof Array) {
//       res = []
//       source.forEach(item => {
//           if (typeof item === 'object') {
//               res = [...res, deepCopy(item)]
//           } else {
//               res = [...res, item]
//           }
//       })
//   } else {
//     let keys = Reflect.ownKeys(source);
//     res = {};
//     keys.forEach(item => {
//       if (typeof source[item] === "object") {
//         res[item] = deepCopy(source[item]);
//       } else {
//         res[item] = source[item];
//       }
//     });
//   }
//   return res;
// };

const deepCopy = source => {
  if (typeof source !== "object") {
    throw Error(`${source}不是引用数据类型，不需要深拷贝`);
  }
  let res = Array.isArray(source) ? [] : {};
  for (key in source) {
    if (typeof source[key] === "object") {
      res[key] = deepCopy(source[key]);
    } else {
      res[key] = source[key];
    }
  }
  return res;
};

module.exports.deepCopy = deepCopy;

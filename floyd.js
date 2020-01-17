const floyd = head => {
  let arr = [];
  let index;
  while (head !== null) {
    if (arr.includes(head)) {
      index = arr.findIndex(item => item.value === head.value);
      break;
    } else {
      arr.push(head);
    }
    head = head.dep;
  }
  return index;
};

module.exports.floyd = floyd;

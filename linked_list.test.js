const {traversal} = require('./linked_list')

const NodeD = {
    value: 4,
    next: null
  };
  
  const NodeC = {
    value: 3,
    next: NodeD
  };
  
  const NodeB = {
    value: 2,
    next: NodeC
  };
  
  const NodeA = {
    value: 1,
    next: NodeB
  };
  
  const LinkedList = {
    head: NodeA
  };


  test('求合为 10', () => {
      let sum = 0
      traversal(LinkedList, current => sum += current)
      expect(sum).toBe(10)
  })
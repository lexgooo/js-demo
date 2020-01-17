/**
 * 查找，插入，删除， 查找前一个节点，显示链表
 */
// function Node (element) {
//     this.element = element
//     this.next = null
// }

// function LinkedList () {
//     this.head = new Node('head')
//     this.find = function () {}
// }

function traversal(linkedList, callback) {
    let current = linkedList.head
    let result
    while (current !== null) {
        result = callback(current.value)
        current = current.next
    }
    return result
}
module.exports = {
    traversal
}
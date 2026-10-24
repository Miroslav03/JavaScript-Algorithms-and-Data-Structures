
class ListNode {
     val: number
     next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
      }
 }

function hasCycle(head: ListNode | null): boolean {
    const set = new Set()

    let pointer = head

    while(pointer !== null){
        if(set.has(pointer)){
            return true
        }
        set.add(pointer)
        pointer = pointer.next
    }

    return false
};
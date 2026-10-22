
 class ListNode {
     val: number
     next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head === null) return null

    let pointer = head

    while(pointer !== null){
        if(pointer.val === val){
            head = pointer.next
            pointer = pointer.next!
            continue
        }

        if(pointer.next?.val === val){
            pointer.next = pointer.next.next
            continue
        }
            pointer = pointer.next!
    }

    return head
};
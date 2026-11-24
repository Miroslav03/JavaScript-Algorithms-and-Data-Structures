class ListNode {
     val: number
      next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let distance = n
    let left = head
    let right = head

    while(distance){
      right = right!.next
      distance--
    }

    if(right === null) return head!.next

    while(right.next !== null){
        right = right.next
        left = left!.next
    }

    left!.next = left!.next?.next ?? null

    return head
};
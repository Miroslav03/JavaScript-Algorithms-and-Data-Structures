function middleNode(head: ListNode | null): ListNode | null {
    let fastP = head
    let slowP = head

    while(fastP !== null && fastP.next !== null){
        fastP = fastP.next.next
        slowP = slowP!.next
    }
    
    return slowP
};
function reorderList(head: ListNode | null): void {


    //Figure out the middle
    let fast = head
    let slow = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    // Reverse the list from the middle
    let prev = null

    while(slow !== null){
        const next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    //Connect each node from the beggining to its reversed sibling  
    slow = head

    while(prev !== null){
        const nextFirst = slow.next
        const nextSecond = prev.next

        if(nextSecond === null) return

        slow.next = prev
        slow = nextFirst

        prev.next = slow
        prev = nextSecond
    } 

};
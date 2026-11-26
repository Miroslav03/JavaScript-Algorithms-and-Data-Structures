function swapPairs(head: ListNode | null): ListNode | null {
    if(head === null) return null
    if(head.next === null) return head

    let returned = head.next

    let prev = null
    let mid = head
    let last = head.next

    while(mid !== null && last !== null){
       const temp = last.next 
       mid.next = temp 
       last.next = mid 

       if(prev){
        prev.next = last
       } 

       prev = mid    
       mid = temp 
       last = temp?.next ?? null
    }

    return returned
};
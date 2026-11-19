function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2
    if(!list2) return list1

    let head = null 
    let tail = null

    if(list1.val <= list2.val){
        head = list1
        tail = list1
        list1 = list1.next
    }else{
        head = list2
        tail = list2
        list2 = list2.next
    }

    while(list1 && list2){
        if(list1.val <= list2.val){
            tail.next = list1 
            tail = tail.next
            list1 = list1.next
        }else {
            tail.next = list2 
            tail = tail.next
            list2 = list2.next
        }
    }

    if(!list1) tail.next = list2
    if(!list2) tail.next = list1

    return head
};
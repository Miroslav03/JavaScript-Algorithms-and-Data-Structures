function isPalindrome(head: ListNode | null): boolean {
    let slow = head
    let fast = head

    while(fast?.next !== null && fast !== null){
        fast = fast.next.next
        slow = slow!.next
    }

    let prev = null

    while(slow !== null){
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    while(prev !== null){
        if(prev.val !== head!.val){
            return false
        }
        prev = prev.next
        head = head!.next
    }

    return true
};
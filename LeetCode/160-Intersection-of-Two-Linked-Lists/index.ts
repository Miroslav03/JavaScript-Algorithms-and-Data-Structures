function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(headA === null || headB == null) return null

    let pA = headA
    let pB = headB

    while(pA !== pB){
        if(pA === null){
            pA = headB
        }else{
            pA = pA.next
        }

        if(pB === null){
            pB = headA
        }else{
            pB = pB.next
        }
    }

    return pB
};

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(headA === null || headB == null) return null

    let pA = headA
    let pB = headB

    let lengthA = 0
    let lengthB = 0

    while(pA !== null){
        lengthA += 1
        pA = pA.next
    }   

    while(pB !== null){
        lengthB += 1
        pB = pB.next
    }   

    pA = headA
    pB = headB
    
    if(lengthA > lengthB){
      for(let i = 1; i <= lengthA - lengthB; i++){
        pA = pA.next
      }
    }else{
      for(let i = 1; i <= lengthB - lengthA; i++){
        pB = pB.next
      }
    }

    while(pB !== null){
        if(pB === pA){
            return pA
        }
        pA = pA.next
        pB = pB.next
    }

    return null
};
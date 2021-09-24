// Reverse Linked List

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function mergeLinkedLists(headOne, headTwo) {
    let p1Previous = null;
    let p1 = headOne;
    let p2 = headTwo;

    while (p1 !== null && p2 !== null) {
        if (p1.value < p2.value) {
            p1Previous = p1;
            p1 = p1.next;
        } else {
            if (p1Previous !== null) p1Previous.next = p2;
            p1Previous = p2;
            p2 = p2.next;
            p1Previous = p1;
        }
    }
    if (p1 === null) p1Previous.next = p2;
    return headOne < headTwo ? headOne : headTwo;
}



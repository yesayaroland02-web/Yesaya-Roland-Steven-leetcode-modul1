class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};


function buildList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}


function listToArray(node: ListNode | null): number[] {
    const result: number[] = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}


console.log(listToArray(addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4]))));



console.log(listToArray(addTwoNumbers(buildList([0]), buildList([0]))));


console.log(listToArray(addTwoNumbers(buildList([9, 9, 9, 9, 9, 9, 9]), buildList([9, 9, 9, 9]))));

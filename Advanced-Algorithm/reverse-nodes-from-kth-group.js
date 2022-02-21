class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let head = new ListNode(1);
let sec = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = sec;
sec.next = third;
third.next = fourth;
fourth.next = fifth;

var reverseKGroup = function (head, k) {
  let temp = head;
  let nodevals = [];

  while (temp !== null) {
    nodevals.push(temp.val);
    temp = temp.next;
  }

  let valsArranged = [[], []];
  for (let i = nodevals.indexOf(k); i >= 0; i--) {
    valsArranged[0].push(nodevals[i]);
  }

  for (let i = nodevals.indexOf(k) + 1; i < nodevals.length; i++) {
    valsArranged[1].push(nodevals[i]);
  }

  let nodes = [];
  for (let i = 0; i < valsArranged.flat().length; i++) {
    nodes.push(new ListNode(valsArranged.flat()[i]));
  }

  for (let i = 0; i < nodes.length; i++) {
    if (i == nodes.length - 1) {
      nodes[i].next = null;
      break;
    }
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
};
console.log(reverseKGroup(head, 3));

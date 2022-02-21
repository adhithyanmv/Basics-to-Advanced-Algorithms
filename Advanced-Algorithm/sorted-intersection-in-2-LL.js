let node1 = null;
let node2 = null;
let intersection = null;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

node1 = new Node(11);
node1.next = new Node(22);
node1.next.next = new Node(33);
node1.next.next.next = new Node(44);
node1.next.next.next.next = new Node(55);

node2 = new Node(1);
node2.next = new Node(22);
node2.next.next = new Node(33);
node2.next.next.next = new Node(444);
node2.next.next.next.next = new Node(99);

function push(data) {
  if (intersection === null) {
    intersection = new Node(data);
    return;
  }

  let n = intersection;

  while (n.next !== null) {
    n = n.next;
  }

  n.next = new Node(data);
}

function sortedIntersection() {
  let p = node1,
    q = node2;

  while (p !== null && q !== null) {
    if (p.data === q.data) {
      push(p.data);
      p = p.next;
      q = q.next;
    } else if (p.data < q.data) {
      p = p.next;
    } else {
      q = q.next;
    }
  }
}

sortedIntersection();

function print() {
  let h1 = node1,
    h2 = node2,
    h3 = intersection;

  while (h1 !== null) {
    console.log(`node1 = ${h1.data}`);
    h1 = h1.next;
  }

  console.log("----------");

  while (h2 !== null) {
    console.log(`node2 = ${h2.data}`);
    h2 = h2.next;
  }

  console.log("----------");

  while (h3 !== null) {
    console.log(`intersection = ${h3.data}`);
    h3 = h3.next;
  }
}
print();

/**
node1 = 11
node1 = 22
node1 = 33
node1 = 44
node1 = 55
----------
node2 = 1
node2 = 22
node2 = 33
node2 = 444
node2 = 99
----------
intersection = 22
intersection = 33
 */

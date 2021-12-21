class Queue {
  constructor() {
    this._size = 0;
    this.head;
    this.tail;
  }

  get size() {
    return this._size;
  }

  enqueue(value) {
    const node = { value };

    if (this._size === 0) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this._size++;
  }

  deQueue() {
    if (this._size === 0) return;
    const result = this.head.value;
    if (this._size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return result;
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue);
queue.deQueue();
console.log(queue);
const a = queue.deQueue();
console.log(a);

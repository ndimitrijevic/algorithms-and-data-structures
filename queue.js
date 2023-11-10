// https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push (element) {
    this.pushStack.push(element);
  }

  pop () {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek () {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack[this.popStack.length - 1];
  }

  empty () {
    return !this.popStack.length && !this.pushStack.length;
  }
}


class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){

        const node = this.top;
        return node;
    }

    displayreverse(){
        let node = this.top;
        while(node!==null)
        {
            console.log(node.data);
            node= node.next;
        }
    }
    display(){
        let node = this.top;
        let display=[];
        let count= 0;
 

        while(node!==null)
        {
          display[count]=node.data;
            node= node.next;
            count++;
        }

        for(let i =display.length-1; i>=0;i--)
        {
            console.log(display[i]);
        }
      
    }
   isEmpty(){

        const node = this.top;
        if(node ===null)
        {
            return true;
        }
        return false;
    }

}

module.exports = Stack;
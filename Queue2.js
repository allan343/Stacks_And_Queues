class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue2 {
    constructor() {
        this.first = null;
        this.last = null;
    }

 enqueue(data) {
            const node = new _Node(data);

            if (this.last) {
                prevNode= this.last;
                this.last.next = node;
                this.last=node;
                this.last.prev=prevNode
                
            }

            if (this.first === null) {
                this.first = node;
                this.last = node;
            }

           
           
        }
dequeue() {
            //if the queue is empty, there is nothing to return
           if (this.first === null) {
               return;
           }
           const node = this.first;
           this.first = this.first.next;
           this.first.prev=null;
            //if this is the last item in the queue
           if (node === this.last) {
               this.last = null;
               this.last.prev= null;
           }
           return node.value;
       }

       peek(){

        const node = this.first;
        return node;
    }

    isEmpty(){

        const node = this.first;
        if(node ===null)
        {
            return true;
        }
        return false;
    }

}

module.exports = Queue2;
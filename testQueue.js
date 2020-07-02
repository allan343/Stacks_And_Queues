var Queue = require('./Queue.js');

function displayQueue(ls){
    let currNode = ls.first;
    
  
    
    while(currNode.next!==null){
        //console.log(currNode.head.value);
        currNode=currNode.next;
        console.log(currNode.value);
    }
    
    }

function QueueStuff(){
    
    
  
    let starTrekQ = new Queue();
    let empty = new Queue();
    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov");
  //  displayQueue(starTrekQ);
  console.log("peek method");
  console.log(starTrekQ.peek().value);
  // console.log(starTrekQ);
console.log(starTrekQ.isEmpty());
  console.log(empty.isEmpty());

}



QueueStuff();

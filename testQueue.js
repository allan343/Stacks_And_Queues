var Queue = require('./Queue.js');
var Queue2 = require('./Queue2.js');

function displayQueue(ls){
    let currNode = ls.first;
    
  
    
    while(currNode.next!==null){
        console.log(currNode.value);
        currNode=currNode.next;
    }
    
    }

function QueueStuff(){
    
    
  
    let starTrekQ = new Queue();
    
    let starTrekQ2 = new Queue2();
    
    let empty = new Queue();
    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov");

    displayQueue(starTrekQ);
  console.log("peek method");
  console.log(starTrekQ.peek().value);
  // console.log(starTrekQ);
console.log(starTrekQ.isEmpty());
  console.log(empty.isEmpty());
  displayQueue(starTrekQ);
  console.log("first dequeue");
    starTrekQ.dequeue();
    displayQueue(starTrekQ);
    console.log("second dequeue");
    starTrekQ.dequeue();
    displayQueue(starTrekQ);

    console.log("second queeue");
    console.log();
    console.log();
    console.log();
    console.log();
    starTrekQ2.enqueue("Kirk");
    starTrekQ2.enqueue("Spock");
    starTrekQ2.enqueue("Uhura");
    starTrekQ2.enqueue("Sulu");
    starTrekQ2.enqueue("Checkov");
    displayQueue(starTrekQ2);

}


QueueStuff();

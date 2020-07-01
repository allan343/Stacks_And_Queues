var Stack = require('./Stack.js');

function stackStuff(){
    let emptyStack = new Stack();
    let starTrek = new Stack();
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("Mccoy");
    starTrek.push("Scotty");
    console.log(starTrek);
    console.log(starTrek.peek().data);
    console.log(starTrek.isEmpty());
    console.log(emptyStack.isEmpty());
    starTrek.display();
}

stackStuff();

var Stack = require('./Stack.js');

function isPalindrome(inputString)
{
    let stack = new Stack();
for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString.charAt(i));
}

let reverseString = "";

while (!stack.isEmpty()) {
    reverseString = reverseString+stack.pop();
}

if (inputString === reverseString)
{
    console.log("The input String is a palindrome.");
    return true;
}
else
{
   console.log("The input String is not a palindrome.");
}
}

function sortStack(input) 
{ 
    let tmpStack = new Stack(); 
   
    while (!input.isEmpty()) 
    { 
        // pop out the first element 
     let tmp =  input.pop(); 
    //    console.log("peek"+tmp);
        // while temporary stack is not empty and top 
        // of stack is greater than temp 
        while (!tmpStack.isEmpty() && tmpStack.peek().data > tmp) 
        { 
            // pop from temporary stack and push 
            // it to the input stack 
      //      console.log("huh?");
            input.push(tmpStack.pop()); 
            
        } 
  
        // push temp in tempory of stack 
        tmpStack.push(tmp); 
    } 
   
    return tmpStack; 
} 

function displayQueue(ls){
    let currNode = ls.head;
    
    console.log(currNode.value);
    
    while(currNode.next!==null){
        //console.log(currNode.head.value);
        currNode=currNode.next;
        console.log(currNode.value);
    }
    
    }

function stackStuff(){
    
    //let emptyStack = new Stack();
  
    let starTrek = new Stack();
  /*
    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("Mccoy");
    starTrek.push("Scotty");
   // console.log(starTrek);
   // console.log(starTrek.peek().data);
    //console.log(starTrek.isEmpty());
    //console.log(emptyStack.isEmpty());
    starTrek.display();
    /*console.log("it is "+isPalindrome("allan")+" that it is a palindrome");


    let stackToSort = new Stack();

    stackToSort.push(2);
    stackToSort.push(6);
    stackToSort.push(3);
    stackToSort.push(5);
    console.log("to sort:");
    stackToSort.display();
    let sortedStack = new Stack();
    sortedStack= sortStack(stackToSort);
    console.log("sorted:");
  sortedStack.display();
*/
}



stackStuff();

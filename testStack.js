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
    console.log("it is "+isPalindrome("allan")+" that it is a palindrome");
}

stackStuff();

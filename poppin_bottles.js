/*
For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase

Task 1
Figure out the algorithm that will calculate this.
For example, given a $20 investment, the customer will get 10 bottles of pop.
That gives a supply of both bottles and bottle caps that can be used
to redeem for further bottles, which will then produce a further supply for recycling.

Task 2
Have your program accept an argument (argv) that will
allow the user to specify the amount (in dollars) that the customer is going to spend.
The node script will then calculate the total number of bottles that the customer will receive.

Task 3
Enhance the output of your program so that once the amount has been given,
it provides a breakdown of how many bottles were purchased,
how many were obtained through bottle recycling,
and how many were obtained through bottle cap recycling.

Task 4
Add to the output, so that the program will tell the customer how many
bottles and bottle caps they will have left over.
We have to upsell the customer on buying more pop after all!

TIP! Iterate, Iterate, Iterate
You hear this from us all the time, but build your code incrementally.
Build it in small steps, and make sure you are confident and comfortable that the code is
functioning correctly before you move on to the next step.
*/

var investment = 20;
var bottle_price = 2;
// var purchased_bottles = 0;
var bottle_caps = 0;
var empty_bottles = 0;

function purchaseBottles(money) {
  return money / bottle_price;
}

// function drinkSoda(number_of_bottles) {
//   bottle_caps = number_of_bottles;
//   empty_bottles = number_of_bottles;
// }
bottle_caps, empty_bottles = purchaseBottles(investment);

console.log("Initial pop bottle purchase:", purchaseBottles(investment));
console.log("Bottle caps:", bottle_caps);
console.log("Empty bottles:", empty_bottles);
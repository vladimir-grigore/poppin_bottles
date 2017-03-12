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
var investment = process.argv.slice(2).join();
var purchased_bottles = 0;
var bottle_caps = 0;
var empty_bottles = 0;
var total_bottles_aquired = 0;
var total_bottles_from_caps = 0;
var total_bottles_from_empty_bottles = 0;

function purchaseBottles(money) {
  purchased_bottles = money / 2;
  total_bottles_aquired += purchased_bottles;
}

function drinkSoda(number_of_bottles) {
  bottle_caps += number_of_bottles;
  empty_bottles += number_of_bottles;

  //Refresh the number of full bottles
  purchased_bottles = 0;
}

function recycle(bottle_num, bottle_cap_num) {
  var bottles_from_empty_bottles = 0;
  var bottles_from_caps = 0;

  bottles_from_empty_bottles = Math.floor(bottle_num / 2);
  empty_bottles = bottle_num % 2;

  bottles_from_caps += Math.floor(bottle_cap_num / 4);
  bottle_caps = bottle_cap_num % 4;

  //Refresh the number of full bottles, and totals
  purchased_bottles = bottles_from_empty_bottles + bottles_from_caps;
  total_bottles_from_caps += bottles_from_caps;
  total_bottles_from_empty_bottles += bottles_from_empty_bottles;
}

//Drink soda, get empty bottles and caps, recycle and get more soda bottles
function dringAndRecycle(){
  drinkSoda(purchased_bottles);
  recycle(empty_bottles, bottle_caps);

  //If there are still soda bottles remaining, drink and recycle again
  if (purchased_bottles >= 1){
    dringAndRecycle();
  }
}

//Make initial bottle purchase with cash
purchaseBottles(investment);
//Drink all the soda and recycle bottles and caps
dringAndRecycle();

total_bottles_aquired += total_bottles_from_empty_bottles + total_bottles_from_caps;
console.log("Total bottles purchased:", total_bottles_aquired);
console.log("Total bottles from bottle recycling:", total_bottles_from_empty_bottles);
console.log("Total bottles from cap recycling:", total_bottles_from_caps);
console.log("Remaining bottle caps:", bottle_caps);
console.log("Remaining empty bottles:", empty_bottles);

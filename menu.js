// begin with a blank/new order
var order = '';
var toppings = '';


// build a function to ask questions

function question() {
  // your code goes here
    order = prompt("What would you like to order? burrito bowl tacos?");
    toppings = prompt("What meat toppings would you like? steak carnitas chicken barbacoa sofritas");
        toppings = prompt("What rice or veggie topping would you like?");
}

// call the QUESTION function with the order options
question();

// output their order
document.write("<p>You ordered a " + order + " with " + toppings + "<p>");

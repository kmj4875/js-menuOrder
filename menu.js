// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText) {
    var ansInput = prompt (questionText)
    
  // your code goes here
if (ansInput === yes){
  order = order +  mainFood + ansInput
}
  
}
order = "mainFood"

// call the QUESTION function with the order options
question("would you like some lettuce?");
order +  order + ansInput
question("would you like some salsa?");
order +  order + ansInput
question("would you like some tomato?");
order +  order + ansInput
question("would you like some rice?");
order +  order + ansInput


// output their order
document.write("<p>You ordered: " + order + "<p>");

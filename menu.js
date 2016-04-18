// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText,) {
    var ansInput = promt (questionText)
    
  // your code goes here
if (ansInput === yes){
  order = order +  mainFood + ansInput
}
  
}
order = "mainFood"

// call the QUESTION function with the order options
question("would you like some lettuce?");
question("would you like some salsa?");
question("would you like some tomato?");
question("would you like some rice?");


// output their order
document.write("<p>You ordered: " + order + "<p>");

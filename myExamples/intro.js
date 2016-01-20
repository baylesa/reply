"use strict";

//Example of setting up reply and using the get method
var reply = require("./../")
//Options variable is what your user will go through in node as the list of prompts recieved
var options = {
    name: {
        message: "Please type in your name." //message displayed before answering the prompt
    },
    age: {
        message: "How many springs?",
        type: "number", // the data type expected from the response
        options: [1,2,3,4,5] // options that the user has to choose from
    },
    password: {
        type: "password",
        message: "This is just to show reply's silent output."
    },
    gender: {
        message: "What are you? You can skip this one if you want.",
        options: ["male", "female"],
        allow_empty: true 
    }
}
//Closes the program if the user's input is incorrect
var goodbye = function(){
    console.log("Incorrect, Bears beats Battlestar Galatica");
}
reply.get(options, function(err, answer){
    if(err) return goodbye();
    
    console.log("Here are your answers:\n");
    console.log(answer);
})
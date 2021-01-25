//Question 1

function receivingFunction(someArgument) {

    if(typeof someArgument === "function") {
        someArgument();
    } else {
        console.log("The argument is not a function");
    }

}

function callbackFunction() {
    console.log("I am a callback function");
}

receivingFunction(callbackFunction);


//Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(item, index) {

    console.log("Prize " + (index + 1) + ": " + item);

});


//Question 3

const numberOfSeconds = 5;

setTimeout(function() {
    console.log(`I waited ${numberOfSeconds} seconds before executing.`);
}, (numberOfSeconds * 1000));


//Question 4

let counter = 0;

const myInterval = setInterval(function() {

    counter ++
    console.log(counter);

    if(counter === 4) {
        clearInterval(myInterval);
    }

}, 1500);


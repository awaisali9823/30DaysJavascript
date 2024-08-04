// Activity 1: Creating and Exporting Modules
// Create a module that exports a function to add two numbers. Import and use this module in another script.
function add(a, b){
    return a + b;
}

// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: "Awais",
    age: 25,
    greet(){
        return `Hi, I'm ${this.name}.`
    }
};

// Activity 2:
// Create a module that exports multiple functions using named exports. Import and use these functions in another script
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}


// Create a module that exports a single function using default export. Import and use this function in another script
function division(a, b){
    return a / b;
}

// Activity 3:
// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const pi = 3.14;
const name = "Awais"

function show(){
    console.log("Nothing to show!")
}
function hi(){
    console.log("This is hi function!")
}

module.exports = {add, person, subtract, multiply, pi, name, show, hi};
module.exports.default = division;

// Activity 4: Using third party modules
// Install a third party module (e.g, lodash) using npm. Import and use a function from this module in a script.

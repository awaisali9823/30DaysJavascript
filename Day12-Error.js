// Activity 1: Basic Error Handling with try-catch
// Write a function that intentionally throws an error and use a try catch block to handle the error and log an appropriate message to the console.
function error(){
    try {
    throw new Error("This function is throwing an error intentionally!")
        
    } catch (error) {
        console.log(error.message)
    }
}
error()

// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error
function denominator(a, b){
    try {
        if(b == 0){
            throw new Error("This error is occurred because denominator is zero!")
        }else{
            console.log(a / b)
        }
    } catch (error) {
        console.log(error.message)
    }
}
denominator(10, 0)

// Activity 2: Finally Block
// Write a script that includes a try-catch block and a finally block. Log messages in the try, catch and finally blocks to observe the execution flow
function final(){
    try {
        console.log("This is try block!")
        throw new Error("Catch block will console this error!")
    } catch (error) {
        console.log(error.message)
    } finally{
        console.log("This will print no matter what!")
    }
}
final()

// Activity 3: Custom Error Objects
// Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block
class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = 'CustomError'
    }
}
function throwCustomError(){
    try {
        throw new CustomError("This is a custom error!")
    } catch (error) {
       if(error instanceof CustomError){
           console.log(error.message)
       }else{
        console.log("This is a random error! ",error.message )
       }
    }finally{
        console.log("Finally block executed!")
    }
}
throwCustomError()

// Write a function that validates user input (e.g, checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try catch block
function userInput(a){
    try {
        if(a == "" || a == undefined){
            throw new Error("Error occurred due to empty input")
        }else{
            console.log("User input: ", a)
        }
    } catch (error) {
        console.log(error.message)
    }
}
userInput()

// Activity 4: Error Handling in Promises
// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected randomly!"));
        }
    });
}

randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Caught an error: " + error.message);
    });

// Use try-catch with an async function to handle errors from a promise that randomly resolves or rejects and log the error message.
function randomPromise1() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully through async!");
        } else {
            reject(new Error("Promise rejected randomly through async!"));
        }
    });
}

async function handlePromise() {
    try {
        const result = await randomPromise1();
        console.log(result); 
    } catch (error) {
        console.log("Caught an error: " + error.message);
    }
}

handlePromise();

// Activity 5: Graceful error handling in fetch
// Use the fetch api to request data from an invalid url and handle the error using .catch(). Log an appropriate error message to the console
const url = 'http://invalidurl/com'; 

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.log("Caught an error: " + error.message); 
    });

// Use the fetch api to request data from an invalid url within an async function and handle the error using try-catch. Log an appropriate error message to the console
const invalid = 'https://invalidurl2.com'
async function fetchData(){
    try{
        const result = await fetch(invalid)
    if(!result.ok){
        throw new Error("Error due to invalid url!")
    }
    const data = await result.json()
    console.log(data)
    }catch(error){
        console.log("Error occurred because",error.message)
    }
}
fetchData()
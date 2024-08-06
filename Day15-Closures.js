// Activity 1: Understanding Closures
// Write a function that returns a function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer(){
    let a = 20;
    function inner(){
        return a;
    }
    return inner;
}
const myFunction = outer();
const result = myFunction();
console.log(result)

// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter(){
    let counter = 0;
    return {
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter++;
        }
    };
}
const myCounter = createCounter();
myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue());

// Activity 2: Practical Closures
// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator(){
    let lastID = 0;
    return function generateID(){
        lastID++;
        return lastID;
    }
}
const uniqueID = createIDGenerator();
console.log(uniqueID())
console.log(uniqueID())

// Create a closure that captures a user's name and returns a function that greets the user by name.
function user(name){
    return function greet(){
        return `Hi, ${name}`
    }
}
const greeting = user("Awais")
console.log(greeting())

// Activity 3: Closures in loops
// Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functions = []
for(let i = 0; i < 5; i++){
    functions.push(
        (function(index){
            return function(){
                console.log(index)
            }
        })(i)
    )
}
functions[0]()
functions[2]()

// Activity 4: Module Pattern
// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function itemManager(){
    let items = [];
    return {
        addItem: function(item){
            items.push(item)
            console.log(`${item} added.`)
        },

            removeItem: function(item){
                const index = items.indexOf(item)
                if(index > -1){
                    items.splice(index, 1)
                    console.log(`${item} removed.`)
                }else{
                    console.log(`${item} not found.`)
                }
            },
    
            listItem: function(){
                if(items.length === 0){
                    console.log("No items in the collection.")
                }else{
                    console.log("Items in the collection: ", items.join(', '))
                }
            }
    }
}

const myItems = itemManager()
myItems.addItem("Jeans")
myItems.addItem("Shirts")
myItems.addItem("Shoes")

myItems.listItem()

myItems.removeItem("Shoes")
myItems.listItem()

// Activity 5: Memoization
// Write a function that memoize the result of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args); 

        if (cache.hasOwnProperty(key)) {
            console.log('Fetching from cache:', key);
            return cache[key];
        }

        console.log('Computing result for:', key);
        const result = fn(...args); 
        cache[key] = result; 
        return result;
    };
}

function add(x, y) {
        return x + y;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(5, 7)); 

// Create a memoized version of a function that calculates the factorial of a number
function memFact(fn){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args)

        if(cache.hasOwnProperty(key)){
            console.log("Fetching from cache: ",key)
            return cache[key]
        }

        console.log("Computing result for: ",key)
        const result = fn(...args)
        cache[key] = result;
        return result;
    }
}

function factorial(num){
    if(num < 0) return undefined;
    if(num === 0 || num === 1) return 1;
    return num * factorial(num - 1)
}

const memoizedFactorial = memFact(factorial)
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(4))
console.log(memoizedFactorial(5))
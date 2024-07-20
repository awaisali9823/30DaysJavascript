// Activity 1: Template Literals
// Use template literals to create a string that includes variables for a person's name and age, and log the string to console
let name = "Awais"
let age = 25;
console.log(`My name is ${name}. I'm ${age} years old.`)

// Create a multi-line string using template literals and log the result to console
console.log(`Hi, I'm Awais Ali and I'm completing 
30 days Javascript challenge given by hitesh choudhary`)

// Activity 2: Destructuring
// Use array destructuring to extract the first and second element from an array of numbers and log to console
const arr = ["Red", "Blue", "Green"]
const [first, second] = arr
console.log(`First element is ${first}`)
console.log(`Second element is ${second}`)

// Use object destructuring to extract title and author from a book object and log them to console
const book = {
    title: "30 Days Javascript",
    author: "Hitesh"
}
const {title, author} = book
console.log(`Title: ${title}`)
console.log(`Author: ${author}`)

// Activity 3: Spread and Rest Operators
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1, 6, 7, 8, 9]
console.log(arr2)

// Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result
function sum(...num){
    return num.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(1,2,3,4,5))

// Activity 4: Default Parameters
// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.
// Log the result of calling this function with and without second parameter
function product(a, b = 1){
    return a * b
}
const resultWithTwoParams = product(5, 5)
const resultWithOneParam = product(3)
console.log(resultWithOneParam)
console.log(resultWithTwoParams)

// Activity 5: Enhanced Object Literals
// Use enhanced object literals to create an object with methods and properties, and log the object to console.
const name1 = "Alice"
const age1 = 25

const person = {
    name1,
    age1,
    greet(){
        return `Hello, my name is ${this.name1}, age is ${this.age1}`
    }
}
console.log(person.name1)
console.log(person.age1)
console.log(person.greet())

// Create an object with computed property names based on variables and log the object to the console.
const propName = "firstName"
const propName1 = "lastName"

const person1 = {
    [propName] : "Awais",
    [propName1] : "Ali",
    age: 25
}
console.log(person1)
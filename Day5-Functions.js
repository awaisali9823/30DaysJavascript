// Activity 1
// Write function to check if number is even or odd
function evenOdd(num){
    if(num % 2 === 0){
        console.log(num," is even")
    }else{
        console.log(num," is odd")
    }
}
evenOdd(5)

// Write a function to calculate square of number and return result!
function square(num){
    return `Square of ${num} is ${num * num}`;
}
console.log(square(5))

// Activity 2: Function Expression
// Write a function expression to find the maximum of two numbers and log the result to console
const maximum = function(a, b){
    if(a > b){
        console.log(`${a} is greater than ${b}`)
    }else if(b > a){
        console.log(`${b} is greater than ${a}`)
    }else{
        console.log(`Both values are equal`)
    }
}
maximum(5, 10)

// Write a function expression to concatenate two strings and return result
let str1 = "Thank you,"
let str2 = "Sir Hitesh for this challenge!"
const concat = function(a, b){
    return `${a} ${b}`
}
console.log(concat(str1, str2))

// Activity 3: Arrow Functions
// Write an arrow function to calculate the sum of two numbers and return result
const sum = (a, b) => {
    return a + b
}
console.log(sum(20, 30))

// Write an arrow function to check if a string contains a specific character and return boolean value
let string = "How are you"
const char = (value) => {
    for(let i = 0; i <= string.length; i++){
        if(string[i] == value){
            return true
        }
    }
    return false
}
console.log(char("w"))

// Activity 4: Function parameters and default values
// Write a function that takes two parameters and returns their product. Provide a default value for second parameter

function product(num1, num2 = 5){
    console.log(num1 * num2)
}
product(10)

// Write a function that takes a person's name and age and returns a greeting message. Provide default value for the age
function greet(name, age = 25){
    console.log(`Hi, Mr. ${name}! You are ${age} years old`)
}
greet("Awais")

// Activity 5: Higher-Order Functions
// Write a higher order function that takes a function and a number and calls the function that many times
let times = 3
function higherOrder(func, times){
    for(let i = 1; i <= times; i++){
        func()
    }
}
function greeting(){
    console.log(`Hello is printed ${times} times`)
}
higherOrder(greeting, times)

// Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

function higher(func1, func2, value){
    const result = func1(value)
    const result1 = func2(result)
    return result1
}

const add = x => x + 5
const multiply = x => x * 2
console.log(higher(add, multiply, 10)) 
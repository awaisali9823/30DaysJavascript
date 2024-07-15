// Add two numbers
let a = 20;
let b = 10;
let sum = a + b;
console.log(sum)

// Subtract two numbers
let subtract = a - b;
console.log(subtract)

// Multiply two numbers
let multiply = a * b;
console.log(multiply)

// Divide two numbers
let divide = a / b;
console.log(divide)

// Remainder of two numbers
let remainder = a % b;
console.log(remainder)

// Assignment Operators +=
a += 20;
console.log(a) // 40

// Assignment Operators -=
a -= 20;
console.log(a) //20

// Comparison Operators
console.log(a > b) // true
console.log(a < b) // false
console.log(a == b) // false
console.log(a === b) // false

//Logical Operators &&
if(a == 20 && b == 10){
    console.log("Both conditions are true")
}else{
    console.log("Either one or both conditions are false")
}

//Logical Operators ||
if(a == 10 || b == 10){
    console.log("One of the condition is true")
}else{
    console.log("Both conditions are false")
}

//Logical Operators !
if(a != 10){
    console.log("A is not equal to 10")
}else{
    console.log("A is equal to 10")
}

// Checking if number is positive or not by using ternary operator
const result = (a > 0) ? "Number is positive" : "Number is negative"
console.log(result)

// Function that performs basic addition, subtraction, division, multiplication
function basic(num1, num2){
    const addition = num1 + num2
    const subtraction = num1 - num2
    const multiplication = num1 * num2
    const division = num1 / num2
    const remainder = num1 % num2
    console.log("Addition: ",addition)
    console.log("Subtraction: ",subtraction)
    console.log("Multiplication: ",multiplication)
    console.log("Division: ",division)
    console.log("Remainder: ",remainder)
}
basic(10, 5)

// Using Operators
function operator(num1, num2){
    if(num1 > num2){
        console.log("Num1 is greater")
    }else if(num1 < num2){
        console.log("Num1 is lesser")
    }else if(num1 == 10 && num2 == 20){
        console.log("&& operator is triggered")
    }else if(num1 == 10 || num2 == 30){
        console.log("|| operator is triggered")
    }
}
operator(20, 30)
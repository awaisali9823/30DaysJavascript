// If Else Statement
// Task 1
function check(num){
    if(num >= 0){
        console.log("Number is positive!")
    }else{
        console.log("Number is negative!")
    }
}
check(5)
check(-5)

// Task 2
function voter(age){
    if(age >= 18){
        console.log("You are eligible for voting!")
    }else{
        console.log("Yoy are not eligible for voting!")
    }
}
voter(18)
voter(10)

// Nested If-Else statements
// Task 3
function largest(a, b, c){
    if(a > b && a > c){
        console.log("A is largest")
    }
    else if(b > a && b > c){
        console.log("B is largest")
    }
    else{
        console.log("C is largest")
    }
}
largest(10, 20, 30)

// Switch Case
// Task 4
switch (8){
    case 1:
        console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")
    break;
    case 3:
        console.log("Wednesday")
    break;
    case 4:
        console.log("Thursday")
    break;
    case 5:
        console.log("Friday")
    break;
    case 6:
        console.log("Saturday")
    break;
    case 7:
        console.log("Sunday")
    break;
    default:
        console.log("This is default option!")
}

// Task 5
let score = 50;
switch (true){
    case (score >= 90 && score <= 100):
    console.log("A grade")
    break;
    case (score >= 80 && score <= 89):
    console.log("B grade")
    break;
    case (score >= 70 && score <= 79):
    console.log("C grade")
    break;
    case (score >= 60 && score <= 69):
    console.log("D grade")
    break;
    case (score >= 50 && score <= 59):
    console.log("E grade")
    break;
    case (score < 50):
    console.log("F grade")
    break;
    default:
        console.log("No grades for this!")
}

// Activity 4
// Task 6
function isEven(num){
    console.log(num % 2 == 0 ? "Number is even" : "Number is odd")
}
isEven(15)

// Activity 5
// Task 7
let year = 3100
if(year % 4 == 0){
    console.log("leap year")
}else if(year % 100 == 0){
    console.log("Not a leap year")
}else if(year % 400 == 0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}

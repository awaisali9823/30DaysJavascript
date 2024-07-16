// Task 1
console.log("Value from 1 to 10")
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// Task 2
console.log("Table of 5")
for(let i = 1; i <= 10; i++){
    console.log(i * 5)
}

// Activity 2 While loop
// Task 3
let sum = 0;
let i = 1
while (i <= 10) {
    sum += i
    i++
}
console.log("Sum of numbers from 1 to 10 using while loop: "+ sum)

// Task 4
let j = 10
while(j >= 1){
    console.log(j)
    j--
}

// Activity 3 do while loop
// Task 5
console.log("Do while loop")
let k = 1
do {
    console.log(k)
    k++
}while(k <= 5)

// Task 6
console.log("Factorial using do while loop")
let number = 5;
let l = 1;
let factorial = 1
do{
    factorial *= l
    l++
}while(l <= number)
    console.log("Factorial is: ", factorial)

// Activity 4
// Task 7
for(let i = 1; i <= 5; i++){
    let star = ""
    for(let j = 1; j <= i; j++){
        star += "*"
    }
    console.log(star)
}

// Activity 5
// Task 8
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue
    }else{
        console.log(i)
    }
}

// Task 9
for(let i = 1; i <= 10; i++){
    if(i == 7){
        break
    }
    console.log(i)
}
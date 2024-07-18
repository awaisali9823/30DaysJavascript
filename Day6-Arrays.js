// Activity 1
// Create an array of numbers from 1 to 5 and log the result to the console
const arr = [1, 2, 3, 4, 5]
console.log(arr);

// Access the first and last element of the array and log the result to the console
console.log(`First element of the array: ${arr[0]}`)
console.log(`Last element of the array: ${arr[arr.length - 1]}`)

// Activity 2
// Use the push method to add a new number to the end of array and log updated array
arr.push(6)
console.log(`Updated array by using push method: `, arr)

// Use the pop method to remove an last number from array and log updated array
arr.pop()
console.log(`Updated array by using pop method: `, arr)

// Use the shift method to remove an first number from array and log updated array
arr.shift()
console.log(`Updated array by using shift method: `, arr)

// Use the unshift method to add a new number from array and log updated array
arr.unshift(0)
console.log(`Updated array by using unshift method: `, arr)

// Activity 3
// Use the map method to create a new array where each number is doubled and log the new array
const arrMap = arr.map(num => num + num)
console.log("Doubled the values of array by using map: ",arrMap)

// Use the filter method to create a new array with only even numbers and log the new array
// Array = [0, 2, 3, 4, 5]
const arrFilter = arr.filter(num => num % 2 == 0)
console.log("Even numbers in array by using filter method are: ",arrFilter)

// Use the reduce method to calculate the sum of all numbers in array and log the result
// Array = [0, 2, 3, 4, 5]
const arrReduce = arr.reduce((acc, curr) => acc + curr, 0)
console.log("Sum of array by using reduce method is: ",arrReduce)

// Activity 4
// Use a for loop to iterate over the array and log each element to the console
// Array = [0, 2, 3, 4, 5]
for(let i = 0; i <= arr.length - 1; i++){
    console.log(`${i+1} element of the array is: ${arr[i]}`)
}

// Use the foreach method to iterate over the array and log the result to the console
console.log("Iterating over the array using forEach method")
arr.forEach((element, index) => {
    console.log(index + 1, " of the array is: ",element)
});

// Activity 5
// Create a two dimensional array (matrix) and log the entire array to the console
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix)

// Access and log the specific element from the two dimensional array
// Here, I'm accessing the value 5
console.log(matrix[1][1])

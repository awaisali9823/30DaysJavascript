const {add, person, subtract, multiply} = require('./Day13-Modules')
const division = require('./Day13-Modules').default
const activity = require('./Day13-Modules')

console.log(`The sum is: ${add(5, 5)}`)
console.log(`The difference is: ${subtract(10, 5)}`)
console.log(`The multiplication is: ${multiply(5, 5)}`)

console.log(person.greet())

console.log(`The divided value by using default is: ${division(30, 5)}`)

console.log("Value of Pi: ",activity.pi)
console.log("My name is ", activity.name)
activity.show()
activity.hi()

// Activity 4: Using third party modules
// Install a third party module (e.g, lodash) using npm. Import and use a function from this module in a script.

const lod = require('lodash')

const numbers = [1,2,3,4,5]
const shuffledNumbers = lod.shuffle(numbers)
console.log(shuffledNumbers)

// Install a third party module (e.g, axios) using npm. Import and use this module to make a network request in a script.

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
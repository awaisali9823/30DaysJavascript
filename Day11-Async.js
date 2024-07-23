// Activity 1: Understanding Promises
// Create a promise that resolves with a message after 2 second timeout and log the message to the console
const message = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This message is shown after 2 seconds!")
    }, 2000)
})

message.then((show) => {
    console.log(show)
})

// Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch()
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Rejected message is consoled after 2 seconds!"));
    }, 2000)
})
myPromise.then((show) => {
    console.log(show)
}).catch((error) => {
    console.log(error.message)
})

// Activity 2: Chaining Promises
// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log the messages in a specific order
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 1");
    }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 2");
    }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 3");
    }, 3000);
});
fetchData1.then((message) => {
    console.log(message)
    return fetchData2
}).then((message) => {
    console.log(message)
    return fetchData3
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error.message)
})

// Activity 3: Using Async Await
// Write an async function that waits for a promise to resolve and then logs the result to console
const Data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Message is resolved and logged using async await!")    
    }, 2000)
})
async function logPromise(){
    try {
        const result = await Data;
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}
logPromise()

// Write an async function that handles a rejected promise using try-catch and logs the error message
const rejectedData = new Promise((resolve, reject) => {
    reject(new Error("Error is shown by using async await function!"))
})
async function showData(){
    try {
        const result = await rejectedData
        console.log(result)
    } catch (error) {
        console.log(error.message)        
    }
}
showData()

// Activity 4: Fetching Data from an API
// Use the fetch API to get data from a public API and log the response data to the console using promises
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetch(apiUrl).then((response) => {
    if(!response.ok){
        throw new Error('Network response was not ok!')
    }
    return response.json()
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error.message)
})

// Use the fetch API to get data from a public API and log the response data to the console using promises
const url = "https://jsonplaceholder.typicode.com/albums"
async function apiLog(){
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)
}
apiLog()

// Activity 5: Concurrent Promises
// Use Promise.all to wait for multiple promises to resolve and then log all their values 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 is resolved!")
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 is resolved!")
    }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 is resolved!")
    }, 3000)
})

Promise.all([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error))

// Use Promise.race to log the value of the first promise that resolves among multiple promises
// Define multiple promises
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise 4'), 2000); 
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise 5'), 1000); 
});

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result from promise 6'), 1500); 
});

Promise.race([promise4, promise5, promise6])
    .then(result => {
        console.log('First promise resolved with:');
        console.log(result);
    })
    .catch(error => {
        console.error('Error occurred:');
        console.error(error);
    });

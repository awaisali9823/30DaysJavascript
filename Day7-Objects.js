// Activity 1
// Create an object representing a book with properties like title, author and year and log the result to console.

const book = {
    title: "30-Days Javascript",
    author: "Hitesh",
    year: 2024
}
console.log(book)

// Access and log the title and author properties of the book object
console.log("Title: ",book.title)
console.log("Author: ",book.author)

// Activity 2
// Add a method to the book object that returns a string with book's title and author, and log the result of calling this method
book.getBookInfo = function(){
    console.log(`${this.title} by ${this.author}`)
}
book.getBookInfo()

// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book.updateYear = function(year){
    console.log(`Published in ${this.year = year}`)
}
book.updateYear(2025)

// Activity 3: Nested Objects
// Create a nested object representing a library with properties like name, and books (an array of book objects), log the library object to the console

const library = {
    name: "City Library",
    books: [
        {
            title: "30-Days Javascript",
            author: "Hitesh",
            year: 2024
        },
        {
            title: "React Js",
            author: "Jordan Walke",
            year: 2010
        }
    ]
}
console.log(library)

// Access and log the name of library and titles of all books in the library
console.log(library.name)
console.log("Books titles:")
library.books.forEach(book => {
    console.log(book.title)
});

// Activity 4: This keyword
// Add a method to the book object that uses "this" keyword to return a string with the book's title and year and log the result of calling this method

book.getTitleYear = function(){
    console.log(`${this.title} (${this.year})`)
}
book.getTitleYear()

// Activity 5: Object Iteration
// Use a for...in loopto iterate over the properties of the book object and log each property and its value
    for (const key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`)
    }
}

// Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log(Object.keys(book))
console.log(Object.values(book))
// Activity 1: Class Definition
// Define a class person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    }

    updatedAge(newAge){
        this.age = newAge;
        console.log(`Age updated to: ${this.age}`)
    }
}

 const person1 = new Person("Awais", 25)
 console.log(person1.greet())

// Add a method to the person class that updates the property age and log the updated age.
 person1.updatedAge(26)

// Activity 2: Class Inheritance
// Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
// Override the greeting method in the student class to inlcude the student id in the message. Log the overridden greeting message.
class Student extends Person {
    static studentCount = 0;
    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId;

        Student.studentCount++
    }

    getStudentId(){
        return `${super.greet()} and my student Id is ${this.studentId}`
    }

    greet(){
        return `Hi, My name is ${this.name}. I'm ${this.age} years old. My student ID is ${this.studentId}`
    }
    
    static getStudentCount(){
        console.log(`The count is: ${Student.studentCount}`)
    }
}
const student1 = new Student("Ahmad", 25, "S12")
const student2 = new Student("Ahad", 25, "S13")
const student3 = new Student("Ahaan", 25, "S14")
console.log(student1.greet())
console.log(student2.greet()) 

// Activity 3: Static Method and Properties
// Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
 Person.genericGreeting = function(){
    console.log("Hi, this is static greeting from Person class!")
 }
 Person.genericGreeting();
// We will use Person.prototype, if we want to add a method or property in class which is not static

// Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
 Student.getStudentCount()

// Activity 4: Getters and Setters
// Add a getter method to the person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter
 class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.firstName} and I'm ${this.age} years old.`
    }
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    updatedAge(newAge){
        this.age = newAge;
        console.log(`Age updated to: ${this.age}`)
    }
}
const person2 = new Person("Awais", "Ali", 25)
console.log(person2.fullName)

// Add a setter method to the person class to update the name properties (firstName, lastName). Update the name using setter and log the updated full name
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.firstName} and I'm ${this.age} years old.`
    }
    
    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    updatedAge(newAge){
        this.age = newAge;
        console.log(`Age updated to: ${this.age}`)
    }
}

const person1 = new Person("Awais", "Ali", 25)
console.log(person1.fullName)

person1.fullName = "Ahad Hussain"
console.log(person1.fullName)
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'coding', 'hiking'],

    greet: function () {
        console.log("Hello, my name is ", this.firstName);
    }
}

console.log(person.firstName);

console.log(person.firstName);
console.log(person.age);

person.greet();

person.lastName = 'Smith';
console.log(person.lastName);

person.nationality = 'American';
console.log(person.nationality);

// Object Destructuring
const { firstName, lastName, age } = person;
console.log(firstName);
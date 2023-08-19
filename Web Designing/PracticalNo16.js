// Creating an object
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// Modifying object properties
person.age = 35;
console.log(person.age); // Output: 35

// Adding new properties
person.job = "Developer";
console.log(person.job); // Output: Developer

// Deleting a property
delete person.city;
console.log(person.city); // Output: undefined

// Object methods
let car = {
  brand: "Toyota",
  model: "Camry",
  start: function () {
    console.log("The car has started.");
  },
  stop: function () {
    console.log("The car has stopped.");
  }
};

car.start(); // Output: The car has started.
car.stop(); // Output: The car has stopped.

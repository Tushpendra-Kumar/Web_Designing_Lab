// Creating an array
let fruits = ["Apple", "Banana", "Orange"];

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange

// Modifying array elements
fruits[1] = "Mango";
console.log(fruits[1]); // Output: Mango

// Adding elements to the array
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Grapes"]

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]

// Getting the length of the array
console.log(fruits.length); // Output: 3

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Mango
// Orange

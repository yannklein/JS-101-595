// console.log("Hello");

const firstName = "Massim";
let age = 23;

age += 1;
console.log(age);

// The code below is ⛔️ because we can't re-assign a const!

// name += " Sha";
// console.log(name);

console.log("Massim,Kenn,Luke,Ayaka,Machiko".split(','))
console.log(`${firstName} is ${age}`)

const students = ["Allan", "Thomas", "Emi", "Ryan"];

// CRUD

// Create
students.push("Abdul");
console.log(students);

// Read
console.log(students[0]);

// Update
students[1] = "Super Thomas";
console.log(students);

// Delete
students.splice(1, 2);
console.log(students);

// JS arrow function: () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`)
})

if (age === 0) {
  console.log("You're young!");
}
else if (age > 18) {
  console.log("You can drive");
}
else {
  console.log("Not there yet!");
}

let number = 42;
// Arrow function () => {}
// const square = (num) => {
//   return num * num;
// }

const square = num => num * num;

console.log(square(number));

// Challenge 1 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,

  // Method to change the age property
};

userObject.newAge = function (age) {
  let oldAge = this.age;
  newAge = 32;
  this.age = newAge;
  this.oldAge = oldAge;
};

// Execute the method to change the age

userObject.newAge();
// Log the updated complexObject

console.log(userObject.age);

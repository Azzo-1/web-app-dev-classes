// Challenge 2 Starter
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
};

// Clone the complexObject three times using the spread operator to clone.
function deepClone(userObject) {
  return JSON.parse(JSON.stringify(userObject));
}

let clone1 = deepClone({ ...userObject });
let clone2 = deepClone({ ...userObject });
let clone3 = deepClone({ ...userObject });

const clones = [clone1, clone2, clone3];

clones.sort((a, b) => (a.age > b.age ? 1 : -1));

console.log(clones);

// Store the cloned objects in an array

// Sort the array of cloned objects based on the 'age' property in ascending order

// Log the sorted array to the console

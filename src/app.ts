// const userName = "Antoine";

// let age = 24;

// age = 23;

// const add = (a: number, b: number = 10) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }

// printOutput(add(14));

const hobbies = ["Football", "Muscu"];
const activeHobbies = ["Hiking", ...hobbies];

const person = {
  username: "Antoine",
  age: 23
};

const copiedPerson = person;

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 4, 1, 10);
console.log(addNumbers);

const [hobby1, hobby2] = hobbies;

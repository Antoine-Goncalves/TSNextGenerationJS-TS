const userName = "Antoine";

let age = 24;

age = 23;

const add = (a: number, b: number = 10) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}

printOutput(add(14));

const hobbies = ["Football", "Muscu"];
const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

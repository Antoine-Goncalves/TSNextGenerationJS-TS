const userName = "Antoine";

let age = 24;

age = 23;

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}

printOutput(add(14, 10));

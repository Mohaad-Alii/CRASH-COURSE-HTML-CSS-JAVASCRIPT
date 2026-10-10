// Exercise 1: Simple Calculator

let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
let operation = prompt("Enter an operation (+, -, *, /):");

let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    console.log("Result:", result);

} else if (operation === "-") {
    result = firstNumber - secondNumber;
    console.log("Result:", result);

} else if (operation === "*") {
    result = firstNumber * secondNumber;
    console.log("Result:", result);

} else if (operation === "/") {
    if (secondNumber === 0) {
        console.log("Error: Cannot divide by zero.");
    } else {
        result = firstNumber / secondNumber;
        console.log("Result:", result);
    }

} else {
    console.log("Invalid operation. Please use +, -, *, or /.");
}
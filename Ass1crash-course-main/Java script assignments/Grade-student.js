let firstNumber = Number(prompt("First number:"));
let secondNumber = Number(prompt("Second number:"));
let operation = prompt("Operation (+, -, *, /):");

if (operation === "+") {
    console.log("Result:", firstNumber + secondNumber);

} else if (operation === "-") {
    console.log("Result:", firstNumber - secondNumber);

} else if (operation === "*") {
    console.log("Result:", firstNumber * secondNumber);

} else if (operation === "/") {
    if (secondNumber === 0) {
        console.log("Error: Cannot divide by zero.");
    } else {
        console.log("Result:", firstNumber / secondNumber);
    }

} else {
    console.log("Invalid operation!");
}
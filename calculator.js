/**
 * Arithmetic Functions
 */
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Basic division check for division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

/**
 * Main function to handle button clicks and display the result.
 * @param {function} operation The arithmetic function to perform (e.g., add, subtract).
 */
function performCalculation(operation) {
    // Get input values from the DOM
    const num1Input = document.getElementById('number1').value;
    const num2Input = document.getElementById('number2').value;
    const resultElement = document.getElementById('calculation-result');

    // Convert inputs to floating-point numbers.
    // Use || 0 to provide a default value of 0 for empty or invalid inputs,
    // ensuring calculation doesn't fail.
    const number1 = parseFloat(num1Input) || 0;
    const number2 = parseFloat(num2Input) || 0;

    // Perform the calculation
    const result = operation(number1, number2);

    // Display the result
    resultElement.textContent = result;
}

/**
 * Attach Event Listeners
 */

// Addition
document.getElementById('add').addEventListener('click', function() {
    performCalculation(add);
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
    performCalculation(subtract);
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
    performCalculation(multiply);
});

// Division
document.getElementById('divide').addEventListener('click', function() {
    performCalculation(divide);
});

console.log("Calculator script loaded. Use the input fields and buttons to perform calculations.");

let displayElement = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
currentInput = '';
displayElement.textContent = '0';
}

function appendToDisplay(value) {
currentInput += value;
displayElement.textContent = currentInput;
}

function calculateResult() {
try {
let result = eval(currentInput);
displayElement.textContent = result;
currentInput = result.toString();
} catch {
displayElement.textContent = 'Error';
currentInput = '';
}
}

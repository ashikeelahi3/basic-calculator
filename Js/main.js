

let displayText = '';

let tempPrevNumberStorage = 0;
let tempOperatorStorage = '+';
let lastClickIsNumber = false;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const operators = ['AC', 'C', 'x', '+', '-', '*', '/', '='];

const pressNumber = (buttonText) => {
  displayText += buttonText;
  document.getElementById("display").innerText = displayText;
  lastClickIsNumber = true;
}

function pressOperator(buttonText) {
  let tempNumberStorage;
  if (operators.indexOf(buttonText) === -1) {
    return 0;
  }
  if (lastClickIsNumber) {
    tempNumberStorage = parseFloat(displayText);
  } else if ((tempOperatorStorage === '+') || (tempOperatorStorage === '-')) {
    tempNumberStorage = 0;
  } else if ((tempOperatorStorage === '*') || (tempOperatorStorage === '/')) {
    tempNumberStorage = 1;
  }

  if (tempOperatorStorage === '+') {
    displayText = tempPrevNumberStorage + tempNumberStorage;
  } else if (tempOperatorStorage === '-') {
    displayText = tempPrevNumberStorage - tempNumberStorage;
  } else if (tempOperatorStorage === '*') {
    displayText = tempPrevNumberStorage * tempNumberStorage;
  } else if (tempOperatorStorage === '/') {
    displayText = tempPrevNumberStorage / tempNumberStorage;
  } else if (tempOperatorStorage === '=') {
    displayText = tempPrevNumberStorage;
  } 

  tempOperatorStorage = buttonText;
  tempPrevNumberStorage = displayText;
  document.getElementById('display').innerHTML = displayText;
  displayText = '';
  lastClickIsNumber = false;
}

document.getElementById('all-btn').addEventListener('click', () => {
  const buttonText = event.target.innerText;

  if (numbers.indexOf(buttonText) != -1) {
    pressNumber(buttonText);
  } else if (buttonText === 'x') {
    displayText = displayText.slice(0, displayText.length - 1);
    console.log(displayText);
    document.getElementById('display').innerText = displayText;
  } else if (buttonText === 'C') {
    displayText = '';
    document.getElementById('display').innerText = displayText;
  } else if (buttonText === 'AC') {
    tempPrevNumberStorage = 0;
    tempOperatorStorage = '+';
    displayText = '';
    document.getElementById('display').innerText = '';
  } else {
    pressOperator(buttonText);
  } 
});
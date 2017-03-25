/*--- variables ---*/

var input, op, result, firstNum;
var displayEl = document.getElementById('display');


/*--- event listeners ---*/

document.querySelector('table')
  .addEventListener('click', handleClick);

/*--- functions ---*/

function initialize() {
  input = '';
  op = result = firstNum = null;
}

function updateDisplay() {
  if (result) {
    displayEl.textContent = result;
    initialize();
  } else {
    displayEl.textContent = input ? input : '0';
  }
}

function handleClick(evt) {
  if (evt.target.id === 'display') return;
  var text = evt.target.textContent;
  switch (text) {
    case 'AC':
      initialize();
      updateDisplay();
      break;
    case 'C':
      input = '';
      break;
    case '±':
      if (input.includes('-')) {
        input = input.substring(1);
      } else {
        input = '-' + input;
      }
      break;
    case '÷':
      setOp(div);
      break;
    case '×':
      setOp(mult);
      break;
    case '−':
      setOp(sub);
      break;
    case '+':
      setOp(add);
      break;
    case '=':
      if (firstNum && op && input) {
        result = op(firstNum, parseFloat(input));
        input = '';
      }
      break;
    case '.':
      input += input.includes('.') ? '' : '.';
      break;
    default:
      input += text;

  }
  updateDisplay();
}

function setOp(opFunc) {
  if (!input) return;
  firstNum = parseFloat(input);
  op = opFunc;
  input = '';
}



initialize();

/*--- operator functions ---*/

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}




let result = document.getElementById('result');

function clearScreen() {
  result.innerHTML = '';
}

function addSymbol(symbol) {
  result.innerHTML += symbol;
}

function calculate() {
  try {
    let expression = result.innerHTML;
    result.innerHTML = eval(expression);
  } catch (error) {
    result.innerHTML = 'Error';
  }
}

let num1 = 8;
let num2 = 2;
let sumEl = document.getElementById('sum-el')
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


function add() {
    console.log('add');
    let result =  num1 + num2;
    sumEl.textContent = 'Sum: ' + result;
}

function subtract() {
    console.log('sub');
    let result =  num1 - num2;
    sumEl.textContent = 'Sum: ' + result;
}

function divide() {
    console.log('div');
    let result =  num1 / num2;
    sumEl.textContent = 'Sum: ' + result;
}

function multiply() {
    console.log('mul');
    let result =  num1 * num2;
    sumEl.textContent = 'Sum: ' + result;
}
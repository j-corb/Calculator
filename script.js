function adds(x, y) {
    return x+y;
}

function subtracts(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}
function operate(x, y, op) {
    return op(x,y);
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.math');
const output = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const equate = document.querySelector('#equate');

let workingVals = [];
let currdis = 0
output.textContent = currdis;
let answer;
//use to update the display while running functions?

let num = ''

numbers.forEach((numButton) => {
    numButton.addEventListener('click', () => {
            num += numButton.id;
    });
});
  
let opfunc;
let total;
//can turn this into a swtich statement
operators.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        workingVals.push(parseFloat(num));
        num = '';
        if (opButton.id === 'add') {
            opfunc = adds;
        } else if (opButton.id === 'subtract') {
            opfunc = subtracts;
        } else if (opButton.id === 'multiply') {
            opfunc = multiply;
        } else if (opButton.id === 'divide') {
            opfunc = divide;
        } 
    })
})

equate.addEventListener('click', () => {
    output.textContent = workingVals.reduce((total, c) => 
    operate(total, c, opfunc));
    num = workingVals.reduce((total, c) => 
    operate(total, c, opfunc));
    answer = num;
    workingVals = [];
})     


 //output.textContent = numButton.id;
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
//use to update the display while running functions?

/*buttons.forEach((button) => {
    button.addEventListener('click', () => {
         
    })
})*/

let opfunc;
let total;
//can turn this into a swtich statement
operators.forEach((opButton) => {
    opButton.addEventListener('click', () => {
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

numbers.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        workingVals.push(numButton.id);
    });
});

/*if (workingVals.length > 1 && opfunc) {
    workingVals.reduce((total, c) => 
        operate(total, c, opfunc))
}

/*if (workingVals.length > 1 && opfunc) {
    workingVals.reduce((total, c) => {
        operate(total, c, opfunc);
    })
}*/

equate.addEventListener('click', () => {
    output.textContent = workingVals.reduce((total, c) => 
    operate(total, c, opfunc));
})     


 //output.textContent = numButton.id;
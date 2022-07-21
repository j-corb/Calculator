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

function operate(operation, x, y) {
    return operation(x,y);
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.math');
const output = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let workingVals = [];
let currdis = 9;
currdis +=10;
output.textContent = currdis;
//use to update the display while running functions?

/*buttons.forEach((button) => {
    button.addEventListener('click', () => {
         
    })
})*/

numbers.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        workingVals.push(numButton.id);
        output.textContent = numButton.id;
       
    });
});

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



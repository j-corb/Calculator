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


let currdis = 9;
currdis +=10;
output.textContent = currdis;
//use to update the display while running functions?

numbers.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        output.textContent = numButton.id;
       
    });
});

let opfunc;
//can turn this into a swtich statement
operators.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        if (opButton.id === 'add') {
            opfunc = adds;
        } else if (opButton.id === 'subtract') {
            opfunc = subtracts;
        } else if (opButon.id === 'multiply') {
            opfunc = multiply;
        } else if (opButton.id === 'divide') {
            opfunc = divide;
        } 
    })
})

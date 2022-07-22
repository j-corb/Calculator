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
const inputs = document.querySelector('.mini');
const buttons = document.querySelectorAll('.button');
const equate = document.querySelector('#equate');
const clear = document.querySelector('#clear');

let workingVals = [];
let currdis = 0
output.textContent = currdis;
let answer ='';
//use to update the display while running functions?

//gives the button a 'popup' effect
buttons.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        btn.classList.add('enlarge');
    });
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('enlarge');
    });
    btn.addEventListener('click', () => {
        answer += btn.id;
    })
});


let num = ''

numbers.forEach((numButton) => {
    numButton.addEventListener('click', () => {
            num += numButton.id;
            output.textContent = num;
    });
});
  
let opfunc;
let total;
//can turn this into a swtich statement
operators.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        if (num) {
            workingVals.push(parseFloat(num));
            num = '';
        };
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
    answer= workingVals.reduce((total, c) => 
        operate(total, c, opfunc));
    workingVals = [];
    workingVals.push(output.textContent);

})  ;   

clear.addEventListener('click', () => {
    workingVals = [];
    num='';
    output.textContent = 0;
});

 //output.textContent = numButton.id;
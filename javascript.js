let prevNum;
let currNum;
let processor;
let output;

const operators = ['/', 'x', '-', '+', '=', '.', '+/-', 'ac', 'c'];
const body = document.querySelector('body');
const container = document.querySelector('#container');
const display = document.createElement('div');
display.id = 'display';
display.textContent = '';
body.insertBefore(display, container);


let n = 0;
for (let i = 0; i < 10; i++) {
    const numbers = document.createElement('button');
    numbers.className = n;
    numbers.id = 'button';
    numbers.textContent = n;
    container.appendChild(numbers);
    n += 1;
}

for (let j = 0; j < 9; j++) {
    const operator = document.createElement('button');
    operator.className = operators[j];
    operator.id = 'button';
    operator.textContent = operators[j];
    container.appendChild(operator);
}

const button = Array.from(document.querySelectorAll('#button'));
for (let k of button) {
    k.addEventListener('click', () => {
        switch (k.textContent) {
            case '+':
                processor = '+';
                prevNum = display.textContent;
                break;
            case '-':
                processor = '-';
                prevNum = display.textContent;
                break;
            case 'x':
                processor = 'x';
                prevNum = display.textContent;
                break;
            case '/':
                processor = '/';
                prevNum = display.textContent;
                break;
            case 'ac':
                display.textContent = '';
                processor = '';
                prevNum = '';
                currNum = '';
                break;
            case 'c':
                display.textContent = display.textContent.slice(0, -1);
                break;
            /* case '+/-':
                display.textContent = display.textContent.push('-');
                break; */
            default:
                display.textContent += k.textContent;
        }
    });   
}





function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a, b, operator) {
    let result;
    switch(operator) {
        case '+':
            result = addition(a, b);
            break;
        case '-':
            result = subtraction(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    return result;
}
//global storage semantics
let prevNum = null;
let currNum = null;
let prevOper = null;
let currOper = null;
let answer = null;
let displayValue = null;

//body, container, display divs
const body = document.querySelector('body');
const container = document.querySelector('#container');
const display = document.createElement('div');
display.id = 'display';
display.textContent = displayValue;
body.insertBefore(display, container);

//create number buttons
let num = 0;
for (let i = 0; i < 10; i++) {
    const numbers = document.createElement('button');
    numbers.className = num;
    numbers.id = 'button';
    numbers.textContent = num;
    container.appendChild(numbers);
    num += 1;
}
//create operator buttons
const operators = ['/', 'x', '-', '+', '=', '.', '+/-', 'ac', 'c'];
for (let j = 0; j < 9; j++) {
    const operator = document.createElement('button');
    operator.className = operators[j];
    operator.id = 'button';
    operator.textContent = operators[j];
    container.appendChild(operator);
}

//click event for every button
const button = Array.from(document.querySelectorAll('#button'));
for (let k of button) {
    k.addEventListener('click', () => {
        switch (k.textContent) {
            case '+':
                prevOper = '+';
                prevNum = Number(display.textContent);
                display.textContent = null;
                break;
            case '-':
                prevOper = '-';
                prevNum = Number(display.textContent);
                display.textContent = null;
                break;
            case 'x':
                prevOper = 'x';
                prevNum = Number(display.textContent);
                display.textContent = null;
                break;
            case '/':
                prevOper = '/';
                prevNum = Number(display.textContent);
                display.textContent = null;
                break;
            case 'ac':
                display.textContent = null;
                prevOper = null;
                currOper = null;
                prevNum = null;
                currNum = null;
                answer = null;
                break;
            case 'c':
                display.textContent = display.textContent.slice(0, -1);
                break;
            case '=':
                display.textContent = operate(prevNum, currNum, prevOper);
                break;
            /* case '+/-':
                display.textContent = negate(Number(display.textContent));
                break; */
            default:
                display.textContent += k.textContent;
                if (prevOper != null && prevNum != null) {
                    currNum = Number(display.textContent);
                } 
        }
    });   
}

//procedures
function operate(a, b, operator) {
    switch(operator) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case 'x':
            answer = a * b;
            break;
        case '/':
            answer = a / b;
            break;
    }
    return answer;
}

function negate(a) {
    return a * -1; 
}
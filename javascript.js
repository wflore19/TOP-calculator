//global storage semantics
let prevNum = null;
let currNum = null;
let prevOper = null;
let answer = null;

//body, container, display divs
const body = document.querySelector('body');
const container = document.querySelector('#container');
const display = document.createElement('div');
display.id = 'display';
display.textContent = null;
/* display.textContent = display.textContent; */
body.insertBefore(display, container);

//create number buttons
let num = 0;
for (let i = 0; i < 10; i++) {
    const numbers = document.createElement('button');
    numbers.className = num;
    numbers.id = 'number';
    numbers.textContent = num;
    container.appendChild(numbers);
    num += 1;
}
//create operator buttons
const operators = ['/', 'x', '-', '+', '=', '.', '+/-', 'ac', 'c'];
for (let j = 0; j < 9; j++) {
    const operator = document.createElement('button');
    operator.className = operators[j];
    operator.id = 'operator';
    operator.textContent = operators[j];
    container.appendChild(operator);
}

//click event for number buttons
const numButtons = document.querySelectorAll('#number');
for (let k of numButtons) {
    k.addEventListener('click', () => {
        if (display.textContent.length > 9) {
            return;
        }
        
        console.log(k.textContent);
        display.textContent += k.textContent;
            
        if (answer != null) {
            answer = null;
            display.textContent = null;
            display.textContent += k.textContent;
        }

        if (prevOper == null) {
            prevNum = Number(display.textContent);
        } else if (prevOper != null && prevNum != null) {
            currNum = Number(display.textContent);
        }
    });
}
//click event for operator buttons
const operatorButtons = document.querySelectorAll('#operator');
for (let l of operatorButtons) {
    l.addEventListener(('click'), () => {
                                        console.log(l.textContent);
        if (l.textContent == '+') {
            if (display.textContent == null) {
                display.textContent == null
                return;
            }
            if (prevOper == null) {
                prevOper = '+';
                display.textContent = null;
            } else if (prevOper != null) {
                operate(prevNum, currNum, prevOper);
                prevNum = answer;
                display.textContent = prevNum;
                prevOper = '+'
            }
        }
        if (l.textContent == '-') {
            if (prevOper == null) {
                prevOper = '-';
                display.textContent = null;
            } else if (prevOper != null) {
                operate(prevNum, currNum, prevOper);
                prevNum = answer;
                display.textContent = prevNum;
                prevOper = '-'
            }
        }
        if (l.textContent == '/') {
            if (prevOper == null) {
                prevOper = '/';
                display.textContent = null;
            } else if (prevOper != null) {
                operate(prevNum, currNum, prevOper);
                prevNum = answer;
                display.textContent = prevNum;
                prevOper = '/'
            }
        }
        if (l.textContent == 'x') {
            if (prevOper == null) {
                prevOper = 'x';
                display.textContent = null;
            } else if (prevOper != null) {
                operate(prevNum, currNum, prevOper);
                prevNum = answer;
                display.textContent = prevNum;
                prevOper = 'x'
            }
        }
        if (l.textContent == '=') {
            operate(prevNum, currNum, prevOper);
            display.textContent = roundAccurately(answer, 9);
        }
        if (l.textContent == '.') {
            
            if (display.textContent.indexOf('.') > -1) {
                alert(`\'.\' already is use`)
                l.target.disabled = true;
            } else if (display.textContent == '') {
                display.textContent = '0.';
            } else {
                display.textContent += '.';
            }
        }
        if (l.textContent == '+/-') {
            if (prevOper == null) {
                prevNum = negate(display.textContent);
                display.textContent = negate(display.textContent);
            } else if (prevOper != null && prevNum != null) {
                currNum = negate(display.textContent);
                display.textContent = negate(display.textContent);
            } else {
                display.textContent = negate(display.textContent);
            }
        }
        if (l.textContent == 'ac') {
            prevNum = null;
            currNum = null;
            prevOper = null;
            answer = null;
            display.textContent = null;
        }
        if (l.textContent == 'c') {
            if (prevOper == null) {
                prevNum = Number(display.textContent.slice(0, -1));
                display.textContent = display.textContent.slice(0, -1); 
            } else if (prevOper != null && prevNum != null) {
                currNum = Number(display.textContent.slice(0, -1)); 
                display.textContent = display.textContent.slice(0, -1); 
            } else {
                display.textContent = display.textContent.slice(0, -1);  
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
    console.log(answer);
}

function negate(a) {
    return a * -1; 
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
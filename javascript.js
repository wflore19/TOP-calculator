const zero = document.querySelector('#zero');   // selects '0' button
    zero.addEventListener('click', function() {
        updateDisplay(0);
    })

const dot = document.querySelector('#dot');
    dot.addEventListener('click', function() {
        updateDisplay('.');
    })

const three = document.querySelector('#three');
    three.addEventListener('click', function() {
        updateDisplay(3);
    })

const two = document.querySelector('#two');
    two.addEventListener('click', function() {
        updateDisplay(2);
    })

const one = document.querySelector('#one');
    one.addEventListener('click', function() {
        updateDisplay(1);
    })

const six = document.querySelector('#six');
    six.addEventListener('click', function() {
        updateDisplay(6);
    })

const five = document.querySelector('#five');
    five.addEventListener('click', function() {
        updateDisplay(5);
    })

const four = document.querySelector('#four');
    four.addEventListener('click', function() {
        updateDisplay(4);
    })

const nine = document.querySelector('#nine');
    nine.addEventListener('click', function() {
        updateDisplay(9);
    })

const eight = document.querySelector('#eight');
    eight.addEventListener('click', function() {
        updateDisplay(8);
    })

const seven = document.querySelector('#seven');
    seven.addEventListener('click', function() {
        updateDisplay(7);
    })

const allClear = document.querySelector('#allClear');
    allClear.addEventListener('click', function() {
        updateDisplay('');
    })

const display = document.querySelector('#display');

function updateDisplay(a) {                     // imports button selection to display screen
    return display.textContent = a;
}

function addition(a, b) {
    return a + b;
}
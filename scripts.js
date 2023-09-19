// import HTML components as variables
let numOnTop = document.querySelector('.numOnTop');
let numOnBottom = document.querySelector('.numOnBottom');
let mathSign = document.querySelector('.mathSign');
let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const heartsBtn = document.querySelector('.hearts');
const backBtn = document.querySelector('.backspace');
let result = '';

function showHearts() {
    numOnBottom.innerHTML = '💕 Anais Joy 💕'
}

function addOperands() {

    // prevent adding multiplex commas
    if (numOnBottom.innerHTML.includes('.') && this.textContent === '.') {
        return
    }

    // prevent adding multiple 0
    if (numOnBottom.innerHTML === '0' && this.textContent === '0') {
        return
    }
    else if (numOnBottom.innerHTML === '0' && this.textContent !== '0'
        && this.textContent !== '.') {
        numOnBottom.innerHTML = ''
    }

    // add next digit or sign
    numOnBottom.innerHTML += this.textContent;
}

function calculate() {
    // allows entering negative numbers
    if (numOnBottom.innerHTML === '' && this.textContent === '-') {
        numOnBottom.innerHTML = '-'
        return
    }
    // entering double - returns positive
    else if (numOnBottom.innerHTML === '-' && this.textContent === '-') {
        numOnBottom.innerHTML = ''
        return
    }

    // prevent entering signs other than -
    else if (numOnBottom.innerHTML === '') {
        return
    }

    if (mathSign.innerHTML !== '') showResult();
    
    numOnTop.innerHTML = numOnBottom.innerHTML;
    mathSign.innerHTML = this.textContent;
    numOnBottom.innerHTML = '';
}

function delLastDig() {
    if (numOnBottom.innerHTML.length && numOnTop.innerHTML.length < 1) {
            numOnBottom.innerHTML = numOnBottom.innerHTML.replace(/.$/,'')
            return
        }

    else if (numOnTop.innerHTML.length && numOnBottom.innerHTML.length < 1) {
        if (mathSign.innerHTML.length) {
            mathSign.innerHTML = ''
            numOnBottom.innerHTML = numOnTop.innerHTML
            numOnTop.innerHTML = ''
        }

        numOnTop.innerHTML = numOnTop.innerHTML.replace(/.$/,'')
        return
    }

    else if (numOnTop.innerHTML.length && numOnBottom.innerHTML.length) {
        if (numOnBottom.innerHTML.length) {
            numOnBottom.innerHTML = numOnBottom.innerHTML.replace(/.$/,'')
            return
        }
    }
}

// clear variables
function clear() {
    numOnTop.innerHTML = '';
    mathSign.innerHTML = '';
    numOnBottom.innerHTML = ''
    result = '';
}

function showResult() {
    if (numOnTop.innerHTML === '' || numOnBottom.innerHTML === '') return;
    let a = Number(numOnTop.innerHTML);
    let b = Number(numOnBottom.innerHTML);

    switch (mathSign.innerHTML) {
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case 'x':
            result = a*b;
            break;
        case '÷':
            result = a/b;
            break;
    }
    numOnBottom.innerHTML = result
    numOnTop.innerHTML = ''
    mathSign.innerHTML = ''
}

// Connect each button variable to a function

numberBtns.forEach((e) => e.addEventListener('click', addOperands));
operatorBtns.forEach((e) => e.addEventListener('click', calculate));
equalsBtn.addEventListener('click', showResult);
clearBtn.addEventListener('click', clear);
backBtn.addEventListener('click', delLastDig);
heartsBtn.addEventListener('click', showHearts);
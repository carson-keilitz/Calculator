function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

let num1 = 1
let operator = '+'
let num2 = '2'

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
}
}


const buttonsNumber = document.querySelectorAll('[data-number]')
const buttonsOperator = document.querySelectorAll('[data-operator]')
const buttonClear = document.querySelector('[data-clear]')
const outputBox = document.querySelector('.outputBox')



buttonClear.addEventListener('click', () => clear())

buttonsNumber.forEach((element) => 
    element.addEventListener('click', () => addNumber(element.textContent))
)
buttonsOperator.forEach((element) => 
    element.addEventListener('click', () => addOperator(element.textContent))
)


function addNumber(number) {
    if (outputBox.textContent == '0') outputBox.textContent = number
    else outputBox.textContent += number
}

function addOperator(operator) {
    outputBox.textContent += operator
}
function clear() {
    console.log(outputBox.textContent)
    if(outputBox.textContent != '0') outputBox.textContent = 0
}



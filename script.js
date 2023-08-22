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

let num1 = ''
let operator = ''
let num2 = ''
let chain = 'false'

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
const buttonNegative = document.querySelector('.buttonNegative')

//Creates operatable number buttons
buttonsNumber.forEach((element) => 
element.addEventListener('click', () => addNumber(element.textContent))
)
//Creates operatable Operators
buttonsOperator.forEach((element) => 
element.addEventListener('click', () => addOperator(element.textContent))
)

//Creates operatable clear button
buttonClear.addEventListener('click', () => {
    clear()
    num1 = '', operator = '', num2 = '', chain = 'false'
})
//Creates operatable Negative button
buttonNegative.addEventListener('click', () => addNegative())


function addNumber(number) {
    if (outputBox.textContent == '0') outputBox.textContent = number
    else outputBox.textContent += number
}
//if first operator wait for second one, if second calculate the previous value and prepare for the next number.
function addOperator(process) {
    //check if operator is empty
    if (operator == '') {
        operator = process
        console.log(operator)
        num1 = outputBox.textContent
        clear()
    }
    else {
        num2 = outputBox.textContent
        console.log("doing calculations")
        console.log(`num1 ${num1}: operator: ${operator} num2: ${num2}`)
        console.log(operate(num1, operator, num2))
        outputBox.textContent = operate(num1, operator, num2)
        operator = process
        //Use the same value if you click symbol twice
        num1 = num2
        //Need to fix how to chain things.
    }


}
//clears outputBox, num1, num2, and operator
function clear() {
    if(outputBox.textContent != '0') outputBox.textContent = 0
}
function addNegative() {
    //Check if there is negative
    if (outputBox.textContent.includes('-')) outputBox.textContent = outputBox.textContent.substring(1)
    else outputBox.textContent = `-${outputBox.textContent}`
}

//Cick the button and fill with number
//Choose which operator you want to use
//When you click the next number will appear.

//if there is already a operator when you click the operator button again, it will act as equal button
//if you double click operator button it will use the same number for the operator
//The equal button causes operator to go off.





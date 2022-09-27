const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const result = document.querySelector("#result");



add.addEventListener("click", () => {
    // input converted into integers inside function. if parseint is done outside of function, there is no input value yet as the script runs when the page is loaded (instead of when the submit button is clicked) and the result will return NaN
    const num1Input = parseInt(num1.value);
    const num2Input = parseInt(num2.value);
    let addResult = num1Input + num2Input;
    result.innerHTML = addResult;

})

subtract.addEventListener("click", () => {
    const num1Input = parseInt(num1.value);
    const num2Input = parseInt(num2.value);
    let subtractResult = num1Input - num2Input;
    result.innerHTML = subtractResult;

})


multiply.addEventListener("click", () => {
    const num1Input = parseInt(num1.value);
    const num2Input = parseInt(num2.value);
    let multiplyResult = num1Input * num2Input;
    result.innerHTML = multiplyResult;

})


divide.addEventListener("click", () => {
    const num1Input = parseInt(num1.value);
    const num2Input = parseInt(num2.value);
    let divideResult = num1Input / num2Input;
    result.innerHTML = divideResult;

})
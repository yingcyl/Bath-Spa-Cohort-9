const formName = document.querySelector("#form-name");
const formCardNumber = document.querySelector("#form-cardnumber");
const cardNumberError = document.querySelector("#cardnumber-error");
const expiryMonth = document.querySelector("#expiry-month");
const expiryYear = document.querySelector("#expiry-year");
const monthError = document.querySelector("#month-error");
const yearError = document.querySelector("#year-error");
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const expiryDate = document.querySelector("#expiry-date");
const exMonth = document.querySelector("#ex-month");
const exYear = document.querySelector("#ex-year");
const cvc = document.querySelector("#card-back-text");
const formcvc = document.querySelector("#form-cvc");
const cvcError = document.querySelector("#cvc-error");
const confirm = document.querySelector("#confirm");
const mainContainer = document.querySelector(".main-container");
const thankyouState = document.querySelector(".thankyou-state");
const form = document.querySelector("#form");

// interactive card display for card name

formName.addEventListener("input", function () {
  const cardNameInput = formName.value;
  cardName.textContent = cardNameInput;
});

// input validation and interactive card display for card number

formCardNumber.addEventListener("input", function () {
  const cardNumberInput = formCardNumber.value;

  // if statement to check if input is a Number, and if there are 16 numbers. length > 0 has to be included or the error message will not disappear when the input box is empty as an empty box is still less than 16

  if (
    isNaN(cardNumberInput) ||
    (cardNumberInput.length > 0 && cardNumberInput.length < 16)
  ) {
    cardNumberError.textContent = "Please enter a valid number";
    cardNumberError.style.color = "red";
  } else {
    cardNumberError.textContent = "";
  }
  cardNumber.textContent = cardNumberInput;
});

// input validation and interactive card display for  expiry date

expiryMonth.addEventListener("input", function () {
  const expiryMonthInput = expiryMonth.value;

  if (
    isNaN(expiryMonthInput) ||
    (expiryMonthInput > 0 && expiryMonthInput < 1) ||
    (expiryMonthInput > 0 && expiryMonthInput > 12)
  ) {
    monthError.textContent = "Invalid month";
    monthError.style.color = "red";
  } else {
    monthError.textContent = "";
  }
  exMonth.textContent = expiryMonthInput;
});

expiryYear.addEventListener("input", function () {
  const expiryYearInput = expiryYear.value;

  if (
    isNaN(expiryYearInput) ||
    (expiryYearInput > 0 && expiryYearInput < 22) ||
    (expiryYearInput > 0 && expiryYearInput > 30)
  ) {
    yearError.textContent = "Invalid year";
    yearError.style.color = "red";
  } else {
    yearError.textContent = "";
  }
  exYear.textContent = expiryYearInput;
});

// input validation and interactive card display for CVC

formcvc.addEventListener("input", function () {
  const cvcInput = formcvc.value;

  if (isNaN(cvcInput)) {
    cvcError.textContent = "Invalid number";
    cvcError.style.color = "red";
  } else {
    cvcError.textContent = "";
  }
  cvc.textContent = cvcInput;
});

// when the submit button is clicked, the display-none class will be toggled between the main and thank you page
confirm.addEventListener("click", function () {
  form.classList.toggle("d-none");
  thankyouState.classList.toggle("d-none");
});

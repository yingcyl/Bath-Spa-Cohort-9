const button = document.getElementById("submit-button");
const thankyouPage = document.querySelector("#thankyou-state");
const ratingPage = document.querySelector("#rating-state");
const span = document.getElementById("span");
// to select all inputs with the name rating 
const rating = document.querySelectorAll('input[name="rating"]');

// variables below not needed
// const ratingOne = document.getElementById("rating-one");
// const ratingTwo = document.getElementById("rating-two");
// const ratingThree = document.getElementById("rating-three");
// const ratingFour = document.getElementById("rating-four");
// const ratingFive = document.getElementById("rating-five");



// when the submit button is clicked, the display-none class will be toggled between rating and thank you page 
button.addEventListener("click", function() {
    ratingPage.classList.toggle("display-none");
    thankyouPage.classList.toggle("display-none");
    for (r of rating) {
        if (r.checked){
            span.innerHTML = r.value;
        }
    }
} )


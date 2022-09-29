const backArrow = document.getElementById("back-arrow");
const nextArrow = document.getElementById("next-arrow");
const mainText = document.getElementById("mainText");
const textColor = document.getElementById("textColor");

// functions to generate random colors for the main text every time the arrow button is clicked

nextArrow.addEventListener("click", () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    const newColor = `rgb(${r},${g}, ${b})`;
    textColor.style.color = newColor;
})


backArrow.addEventListener("click", () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    const newColor = `rgb(${r},${g}, ${b})`;
    textColor.style.color = newColor;
})
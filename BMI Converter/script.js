// let height = parseInt(document.getElementById("height").value);

// let weight = parseInt(document.getElementById("weight").value);



function calcBMI() {
    
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result");
    let BMI = (weight / ((height * height) 
    / 10000)).toFixed(1);
    result.innerText = `Your BMI is ${BMI}`;
}
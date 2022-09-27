const input = document.querySelector("#input");
const list = document.querySelector("#list");
const button = document.querySelector("#button");

// empty array placed outside of event listener. if added inside the function, a new empty array will be created each time
let newList = [];

button.addEventListener("click", () => {
    // all input converted to lowercase to prevent duplicates being entered but with different letter cases
    const newItem = (input.value).toLowerCase();
    if (newList.includes(newItem)) {
        alert("Item is already on the list!")
    } else {
        newList.push(newItem);
        const addList = document.createElement("li");
        // li tags appended to ul 
        list.append(addList);
        // new inputs appended to li 
        addList.append(newItem);
        input.value = "";
        alert("Item added to the list!")
    }

});


// Launch App
const initApp = () => {

}
// TODO: Get inputs to run calculation on



// TODO: Display results

// Addition Funciton
const add = (val1, val2) => {
    if (!val1 || !val2) return;
    return val1 + val2;
}

// Subtraction Function
const subtract = (val1, val2) => {
    if (!val1 || !val2) return;
    return val1 - val2;
}

// Multiplication Function
const multiply = (val1, val2) => {
    if (!val1 || !val2) return;
    return val1 * val2;
}

// Division Function
const divide = (val1, val2) => {
    if (!val1 || !val2) return;
    if (val2 === 0) {
        return "Cannot divide by zero";
    } else {
        return val1 / val2;
    }
}   

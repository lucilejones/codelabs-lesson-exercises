// Menu Program
// 1. Create a menu to prompt the user what they like to do
// 2. Execute an operation depending on what the user chooses

function chooseNumbers() {
    const numberOne = +prompt("Choose a number.");
    const numberTwo = +prompt("Choose another number.");
    return {numberOne, numberTwo}
}

// {
//     numberOne: value,
//     numberTwo: value
// }

// put the functions (add, subtract, multiply, divide) in the operations script

const answer = +prompt("Please choose and option!\n1. Add. \n2. Subtract \n3. Multiply \n4.Divide")

console.log("answer: ", answer)

if(answer === 1) {
    // addition
    const { numberOne, numberTwo } = chooseNumbers();
    console.log(add(numberOne, numberTwo));
} else if(answer === 2) {
    // subtraction
    const { numberOne, numberTwo } = chooseNumbers();
    console.log(subtract(numberOne, numberTwo));
} else if(answer === 3) {
    // multiplication
    const { numberOne, numberTwo } = chooseNumbers();
    console.log(multiply(numberOne, numberTwo));
} else if(answer === 4) {
    // division
    const { numberOne, numberTwo } = chooseNumbers();
    console.log(divide(numberOne, numberTwo));
} else {
    alert("Invalid option.")
};



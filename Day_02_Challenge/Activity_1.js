//ARITHMETIC OPERATORS

//Task1 = wap to add two number and log the result to the console 
function addnumbers(a,b){
return a+b;
}
 let num1 = 22;
 let num2 = 29;

 let result = addnumbers(num1, num2);
 console.log("The sum of " + num1 + " and " + num2 + " is: " + result);


 //Task2 = wap to sub two number and log the result to the console 

 function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    console.log("The result of the subtraction is: " + result);
}

let number1 = 52;
let number2 = 1;
subtractNumbers(number1, number2);


 //Task3 = wap to multiply two number and log the result to the console 

 function multiplynumbers(num3,num4){
    let result = num3 * num4;
    console.log("The result of the multiplication is: " + result);
 }
 let num3 = 1;
 let num4 = 51;
 multiplynumbers(num3, num4);

 //Task4 = wap to divide two number and log the result to the console 
 
 function divideNumbers(num5, num6) {
    if (num6 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        let result = num5 / num6;
        console.log("The result of the division is: " + result);
    }
}


let number5 = 102;
let number6 = 2;
divideNumbers(number5, number6);


//Task 5 = wap to find the remainder when one number is divisible by another 
//and log the result to the console

function findRemainder(num7, num8) {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        let remainder = num7 % num8;
        console.log("The remainder when " + num7 + " is divided by " + num8 + " is: " + remainder);
    }
}

// Example usage:
let number7 = 103;
let number8 = 52;
findRemainder(number7, number8);

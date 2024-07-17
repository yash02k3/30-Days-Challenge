// LOGICAL OPERATORS

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

function combineWithAndOperator(num7, num8) {
    if (num7 > 0 && num8 < 10) {
        console.log(`${num7} is greater than 0 and ${num8} is less than 10`);
    } else {
        console.log(`Condition not met: either ${num7} is not greater than 0 or ${num8} is not less than 10`);
    }
}


let number7 = 5;
let number8 = 7;
combineWithAndOperator(number7, number8);


//Task 12: Write a program that uses the | | operator to combine two conditions and log the result to the console.

function combineWithOrOperator(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        console.log(`${num1} or ${num2} is equal to 0`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is equal to 0`);
    }
}


let number1 = 5;
let number2 = 0;
combineWithOrOperator(number1, number2);


//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

function negateCondition(num9) {
    if (!(num9 >= 0)) {
        console.log(`${num9} is a negative number`);
    } else {
        console.log(`${num9} is a non-negative number`);
    }
}


let number9 = -3;
negateCondition(number9);


//Activity 3: Do... While Loop
//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
    console.log(k);
    k++;
}while (k<=5);


//Task 6: Write a program to calculate the factorial of a number using a do... while loop.

let number = 5;  
let factorial = 1;
let l = number;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`The factorial of ${number} is: ${factorial}`);

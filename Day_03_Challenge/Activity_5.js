//Combining Conditions


//Task7 Write a program to check if a leap year using multiple conditions (divisible 
// by 4 , but not 100 unless also divisible by 400 ) and log the result to console 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage:
isLeapYear(2020); // Output: 2020 is a leap year.
isLeapYear(2021); // Output: 2021 is not a leap year.
isLeapYear(1900); // Output: 1900 is not a leap year.
isLeapYear(2000); // Output: 2000 is a leap year.

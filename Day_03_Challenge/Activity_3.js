//Switch Case


//Task4 = Wap that uses a switch case to determine the day of the week based on a
// number(1-7)and log the grade to the console .
function getDayOfWeek(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid number! Please enter a number between 1 and 7.";
    }
    console.log(day);
}

// Example usage:
getDayOfWeek(1);  // Output: Monday
getDayOfWeek(4);  // Output: Thursday
getDayOfWeek(7);  // Output: Sunday
getDayOfWeek(8);  // Output: Invalid number! Please enter a number between 1 and 7.




//Task5 = Wap that uses a switch case to assign a grade('A','B','C','D','F')based
//on a score and log the grade to the console .
function assignGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score! Please enter a score between 0 and 100.';
    }
    console.log(`The grade for a score of ${score} is ${grade}`);
}

// Example usage:
assignGrade(95);  // Output: The grade for a score of 95 is A
assignGrade(85);  // Output: The grade for a score of 85 is B
assignGrade(75);  // Output: The grade for a score of 75 is C
assignGrade(65);  // Output: The grade for a score of 65 is D
assignGrade(55);  // Output: The grade for a score of 55 is F
assignGrade(105); // Output: Invalid score! Please enter a score between 0 and 100.

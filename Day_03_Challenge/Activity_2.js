//nested if else statements 

//task 3 : wap to find the largest of three numbers using nested if-else statements 
function findLargest(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    console.log(`The largest number among ${a}, ${b}, and ${c} is ${largest}`);
}

// Example usage:
findLargest(5, 10, 3);  // Output: The largest number among 5, 10, and 3 is 10
findLargest(15, 10, 30);  // Output: The largest number among 15, 10, and 30 is 30
findLargest(7, 7, 7);  // Output: The largest number among 7, 7, and 7 is 7

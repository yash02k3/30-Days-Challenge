//Activity 4: Function Parameters and Default Values


//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

// Example usage
console.log(multiply(5, 3)); // This will print 15
console.log(multiply(5));    // This will print 5 (5 * 1)



//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage
console.log(greet('Alice', 25)); // This will print "Hello, Alice! You are 25 years old."
console.log(greet('Bob'));       // This will print "Hello, Bob! You are 18 years old."

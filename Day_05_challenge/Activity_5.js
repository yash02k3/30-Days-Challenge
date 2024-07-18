//Activity 5: Higher-Order Functions


//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage
function sayHello() {
    console.log("Hello!");
}

repeatFunction(sayHello, 3); // This will print "Hello!" three times



//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

// Example usage
function addTwo(num) {
    return num + 2;
}

function multiplyByThree(num) {
    return num * 3;
}

let result = composeFunctions(addTwo, multiplyByThree, 5); // First adds 2 to 5, then multiplies the result by 3
console.log(result); // This will print 21

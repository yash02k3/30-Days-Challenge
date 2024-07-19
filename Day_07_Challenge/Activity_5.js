//Activity 5: Object Iteration

//Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
  };
  
  // Using for...in loop
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      console.log(`${key}: ${book[key]}`);
    }
  }
  

  //Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object. in javascript

const keys = Object.keys(book);
console.log("Keys:", keys);

// Using Object.values to get all values
const values = Object.values(book);
console.log("Values:", values);

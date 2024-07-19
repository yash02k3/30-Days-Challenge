//Activity 2: Object Methods

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  
    // Task 3: Method to return a string with the book's title and author
    getBookInfo: function() {
      return `${this.title} by ${this.author}`;
    }
  };
  
  // Log the result of calling getBookInfo method
  console.log(book.getBookInfo()); // Output: To Kill a Mockingbird by Harper Lee



//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let books = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  
    // Method to return a string with the book's title and author
    getBooksInfo: function() {
      return `${this.title} by ${this.author}`;
    },
  
    // Task 4: Method to update the book's year property
    updateYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Update the book's year property and log the updated object
  books.updateYear(2024);
  console.log(books); // Output: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2024, getBookInfo: [Function: getBookInfo], updateYear: [Function: updateYear] }
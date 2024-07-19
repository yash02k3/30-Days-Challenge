//Activity 4: The this Keyword
//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.


let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  
    // Method that uses the 'this' keyword to return a string with the book's title and year
    getTitleAndYear: function() {
      return `${this.title} (Year: ${this.year})`;
    }
  };
  
  // Log the result of calling the getTitleAndYear method
  console.log(book.getTitleAndYear());
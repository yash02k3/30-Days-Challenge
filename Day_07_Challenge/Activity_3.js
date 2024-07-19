//Activity 3: Nested Objects


//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// Define the book objects
let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  
  let book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
  };
  
  // Define the library object with a name and an array of books
  let library = {
    name: "City Library",
    books: [book1, book2]
  };
  
  // Log the library object to the console
  console.log(library);

  


//Task 6: Access and log the name of the library and the titles of all the books in the library.
let book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  
  let book4 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
  };
  
  // Define the library object with a new name and an array of books
  let libraryi = {
    name: "Downtown Library",
    books: [book3, book4]
  };
  
  // Log the name of the library
  console.log("Library Name:", libraryi.name);
  
  // Log the titles of all the books in the library
  console.log("Book Titles:");
  libraryi.books.forEach(book => console.log(book.title));
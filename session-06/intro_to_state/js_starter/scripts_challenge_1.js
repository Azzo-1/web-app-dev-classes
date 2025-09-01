// Challenge - Stage 1
let addBook = function (book) {
  // If there's no book to do, do nothing
  if (!book || book.length < 1) return;
  // data

  // Get the list
  var list = document.querySelector("#list");
  // Create a new list item

  var listItem = document.createElement("li");
  // template

  listItem.textContent = book;
  // Append the item to the list

  list.appendChild(listItem);
};
let book = "Harry Potter IV";
// render
addBook(book);
addBook(book1);

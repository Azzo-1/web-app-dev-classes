<<<<<<< HEAD
// Challenge - Stage 2
// The data
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

let template = function (props) {
  let html =
    "<ul>" +
    props.books
      .map(function (book) {
        return "<li>" + book + "</li>";
      })
      .join("") +
    "</ul>";

  return html;
};

let data = {
  books: [
    "Harry Potter I",
    "Harry Potter II",
    "Harry Potter III",
    "Harry Potter IV",
    "Harry Potter V",
    "Harry Potter VI",
    "Harry Potter VII",
  ],
};
// render
let app = document.querySelector("#app");
app.innerHTML = template(data);
=======
let data = {
  books: ["Harry Potter I", "Harry Potter II", "Harry Potter III"],
};
>>>>>>> upstream/2025S2

// The template
let template = function (props) {
  let html =
    "<ul>" +
    props.books
      .map(function (book) {
        return "<li>" + book + "</li>";
      })
      .join("") +
    "</ul>";

  return html;
};
// Render the template into the UI
let app = document.querySelector("#list");

// Update the UI
<<<<<<< HEAD
data.books.push("Harry Potter VIII");
data.books.push("Harry Potter IX");
=======
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
// data.books.pop();
// data.books[1] = "Harry Potter V";
>>>>>>> upstream/2025S2
app.innerHTML = template(data);

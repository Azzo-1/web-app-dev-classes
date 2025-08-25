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

// The template

// Render the template into the UI

// Update the UI
data.books.push("Harry Potter VIII");
data.books.push("Harry Potter IX");
app.innerHTML = template(data);

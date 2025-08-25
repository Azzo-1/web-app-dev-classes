// Challenge 3 Book constructor

function Book(title, author) {
  this.title = title;
  this.author = author;

  //   this.displayInfo = function () {
  //     let html =
  //       "<ul>" +
  //           "<li> title: " + title +
  //           "</li>" + "<li> Author: " + author + "</li>"
  //       });

  //     return html;
  //   };
}
// Creating instances using the Book constructor

function displayInfo(props) {
  let html =
    "<ul>" +
    props.map(function (book) {
      return (
        "<li> title: " +
        book.title +
        "</li>" +
        "<li> Author: " +
        book.author +
        "</li>"
      );
    });

  return html;
}

let book1 = new Book("Book", "Book Guy");
let book2 = new Book("booo book: scary", "Book Guys Cousin");

// Displaying book information
book1.displayInfo();
book2.displayInfo();

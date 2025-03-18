import { Book } from "./book.js";
import { Library } from "./library.js";

const library = new Library();

document.getElementById("addBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();

    if (title && author) {
        const book = new Book(title, author);
        library.addBook(book);
        alert("Livre ajouté !");
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});

document.getElementById("listBooksBtn").addEventListener("click", function () {
    document.getElementById("bookList").textContent = library.listBooks();
});

document.getElementById("searchBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("searchTitle").value.trim();
    document.getElementById("searchResult").textContent = library.findBookByTitle(title);
});

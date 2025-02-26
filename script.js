import { Library } from "./gestionBiblio.js";

const library = new Library();

// Sélection des éléments du DOM
const addBookInput = document.getElementById('addBook');
const addBookForm = document.getElementById('addBookForm');

// Ajouter un livre
addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookTitle = addBookInput.value;
        library.addBook(bookTitle);
        library.listBooks();
});




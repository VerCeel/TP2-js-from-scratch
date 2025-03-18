import { Book } from "./book.js";

export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        return this.books.map(book => book.getDetails()).join("\n") || "Aucun livre disponible.";
    }

    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book.getDetails() : "Livre non trouvé.";
    }
}

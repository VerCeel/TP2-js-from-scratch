export class Library{
    constructor(){
        this.livres = [];
        
    }

/* ajouter un livre */
    addBook(livre){
        this.livres.push(livre);
       
    }

/* afficher les livres existants */
    listBooks(){
        this.livres.forEach((livre) => {
            console.log(livre);
          });
    }

/* chercher les livres existants */
    findBookByTitle(livre){
        let x = this.livres.find((item) => item === livre);
        if(!x){
            return console.log("this book doesnt exist");
        }
        return console.log(`the book "${x}" exist`);
    }
}
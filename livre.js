export class Book {
    constructor(titre, auteur){
        this.titre = titre;
        this.auteur = auteur;
    }

    getDetails(){
        return `Titre : ${this.titre} / Auteur : ${this.auteur}`
    }

}
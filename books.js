
// exports

//imports


class Book extends CatalogItem {
    constructor(type, title, genre, rating, what, review, catalogNumber, author) {
        super(type, title, genre, rating, what, review, catalogNumber);
        this.author = author;
    }

}

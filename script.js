const myLibrary = [];


// the constructor...
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        let infoMessage = `${this.title} by ${this.author},  ${this.pages} pages, ${this.read}.`
        return infoMessage
    }
}

function addBookToLibrary(bookName) {
    let bookCount = myLibrary.length
    myLibrary[bookCount] = bookName
}
// default value for an example
const favoriteBook = new Book('No Country For Old Men', 'Cormac McCarthy', 309, 'read')
addBookToLibrary(favoriteBook)

let cardContainer = document.querySelector('.card-container')
let cards = document.querySelectorAll('.card')

// function displayBooks() {
//     for (books in myLibrary[books]) {

//     }
// }
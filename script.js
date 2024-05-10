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

// some books i've read
const book1 = new Book('No Country For Old Men', 'Cormac McCarthy', 309, 'read')
const book2 = new Book('A Clockwork Orange', 'Anthony Burgess', 192, 'read')

addBookToLibrary(book1)
addBookToLibrary(book2)

let cardContainer = document.querySelector('.card-container')

// display all of the books in myLibrary
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div')
        bookCard.setAttribute('class', 'card')
        let bookTitle = document.createElement('div')
        bookTitle.setAttribute('class', 'book-title')
    }
}
const myLibrary = [];


// the constructor...
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + ' pages'
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
// allow the user to add books
const addBookBtn = document.querySelector('.add-book-btn')
const closeBtn = document.querySelector('.close-modal')
const bookModal = document.querySelector('.book-modal')
addBookBtn.addEventListener('click', () =>
    bookModal.showModal())

closeBtn.addEventListener('click', () =>
    bookModal.close())


// additional feature for closing model when clicking outside of dialog window
bookModal.addEventListener('click', e => {
    const dialogDimensions = bookModal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        bookModal.close()
    }
})
// some books i've read or haven't read
const book1 = new Book('No Country For Old Men', 'Cormac McCarthy', 309, 'Read')
const book2 = new Book('A Clockwork Orange', 'Anthony Burgess', 192, 'Read')
const book3 = new Book('On The Road', 'Jack Kerouac', 307, 'Not Read')

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

let cardContainer = document.querySelector('.card-container')



// display all of the books in myLibrary
function displayBooks() {
    myLibrary.forEach(
        (book) => {
            // populate the book 'cards' with the text from the library. easy enough
            let bookCard = document.createElement('div')
            bookCard.setAttribute('class', 'card')
            let bookTitle = document.createElement('div')
            bookTitle.setAttribute('class', 'book-title')
            bookTitle.textContent = book.title
            let bookAuthor = document.createElement('div')
            bookAuthor.setAttribute('class', 'book-author')
            bookAuthor.textContent = book.author
            let bookPages = document.createElement('div')
            bookPages.setAttribute('class', 'book-pages')
            bookPages.textContent = book.pages
            // whether or not the book has been read, will be displayed via a slider switch. so this requires a little more
            let bookRead = document.createElement('div')
            bookRead.setAttribute('class', 'book-read')
            let bookReadText = document.createElement('div')
            bookReadText.setAttribute('class', 'book-read-text')
            bookReadText.textContent = book.read
            let readSwitch = document.createElement('label')
            readSwitch.setAttribute('class', 'switch')
            let readCheckBox = document.createElement('input')
            readCheckBox.setAttribute('type', 'checkbox')
            readCheckBox.setAttribute('name', 'read?')
            let readSlider = document.createElement('span')
            readSlider.setAttribute('class', 'slider round')
            // now to determine whether or not the book has been read based on the user input
            if (book.read === 'read') {

            }
            //append children as needed 
            bookCard.appendChild(bookTitle)
            bookCard.appendChild(bookAuthor)
            bookCard.appendChild(bookPages)
            bookCard.appendChild(bookRead)
            bookRead.appendChild(bookReadText)
            bookRead.appendChild(readSwitch)
            readSwitch.appendChild(readCheckBox)
            readSwitch.appendChild(readSlider)
            cardContainer.appendChild(bookCard)
        }
    )
}

// populate the page with our default books
displayBooks()

// UNDER CONSTRUCTION
// card slider functionality
let bookReadSliders = document.querySelectorAll('.book-read-slider')
bookReadSliders.forEach((bookReadSlider) => {
    bookReadSlider.addEventListener('click', () => {
        let bookReadTexts = document.querySelectorAll('.book-read-text')
        bookReadTexts.forEach((bookReadText) => {
            if (bookReadText.textContent === 'Not Read') {
                bookReadText.textContent = 'Read'
            }
            else {
                bookReadText.textContent = 'Not Read'
            }
        })
    }
    )
}
)
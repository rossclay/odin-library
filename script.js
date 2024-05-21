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

function resetLibrary(library) {
    library.replaceChildren()
}

function spliceMyLibrary(object, num) {
    for (let i = 0; i < object.length; i++) {
        let index = object.indexOf(num)
        if (index > -1) {
            myLibrary.splice(index, 1)
        }
    };
}


// allow the user to add books
const addBookBtn = document.querySelector('.add-book-btn')
const closeBtn = document.querySelector('.close-modal')
const bookModal = document.querySelector('.book-modal')
const submitModalBtn = document.querySelector('.submit-modal-btn')

addBookBtn.addEventListener('click', () =>
    bookModal.showModal())

closeBtn.addEventListener('click', () =>
    bookModal.close())

submitModalBtn.addEventListener('click', () => {
    let newBookTitle = document.querySelector('#book-title').value
    let newBookAuthor = document.querySelector('#book-author').value
    let newBookPages = parseInt(document.querySelector('#book-pages').value)

    function readOrUnread() {
        if (document.querySelector('#read').checked)
            return 'Read'
        else if (document.querySelector('#unread').checked)
            return 'Not read'
    }
    let newBookRead = readOrUnread()
    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead)
    addBookToLibrary(newBook)
    resetLibrary(cardContainer)
    displayBooks(myLibrary)
    bookModal.close()
}
)
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
const book4 = new Book('The Catcher in the Rye', 'J.D. Salinger', 277, 'Read')
const book5 = new Book('In Cold Blood', 'Truman Capote', 343, 'Read')
const book6 = new Book('The Day of The Jackal', 'Frederick Forsyth', 358, 'Read')

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)


let cardContainer = document.querySelector('.card-container')

// display all of the books in myLibrary
function displayBooks(myLibrary) {
    myLibrary.forEach(
        (book) => {
            // delete button functionalityeasy enough
            let index = myLibrary.indexOf(book)
            let delBtn = document.createElement('button')
            delBtn.setAttribute('class', 'del-btn')
            delBtn.setAttribute('type', 'button')
            delBtn.textContent = 'X'
            delBtn.addEventListener('click', () => {
                spliceMyLibrary(myLibrary, myLibrary[index]);
                resetLibrary(cardContainer);
                displayBooks(myLibrary);
            }
            )
            // populate the book 'cards' with the text from the library. 
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
            let readStatus = book.read
            if (readStatus === 'Read') {
                readCheckBox.checked = true
            }
            else if (readStatus === 'Not Read') {
                readCheckBox.checked = false
            }
            // slider switch functionality WAAAAY UNDER CONSTRUCTION
            readSwitch.addEventListener('click', () => {
                if (readStatus === 'Not Read') {
                    readCheckBox.checked = true;
                    readStatus = 'Read'
                    bookReadText.textContent = readStatus;
                    console.log(`read, ${readCheckBox.classList}, ${readStatus}`)

                }
                else if (readStatus === 'Read') {
                    readCheckBox.checked = false;
                    readStatus = 'Not Read';
                    bookReadText.textContent = readStatus;
                    console.log(`not read, ${readCheckBox.classList}, ${readStatus}`)
                }
                else console.log('fail!!!!')
            })
            //append children as needed 
            bookCard.appendChild(delBtn)
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
displayBooks(myLibrary)

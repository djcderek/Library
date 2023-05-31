let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const container = document.querySelector('.container')
function displayCard(book) {
    const card = document.createElement('div')
    for (key in book) {
        let tempDiv = document.createElement('div')
        tempDiv.textContent = book[key]
        tempDiv.style.color = 'white'
        console.log(key)
        card.appendChild(tempDiv)
    }
    card.classList.add('card')
    container.appendChild(card)
}

function displayLibrary(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        displayCard(myLibrary[i])
    }
}

let book1 = new Book('a', 'b', 5, true)
let book2 = new Book('c', 'd', 6, true)

addBookToLibrary(book1)
addBookToLibrary(book2)

displayLibrary(myLibrary)
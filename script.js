let myLibrary = []
const container = document.querySelector('.container')
let form = document.querySelector('form')
const newBook = document.querySelector('.newBook')

class Book {
    constructor(title, author, pages, read, index) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.index = index
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayCard(book, index) {
    const card = document.createElement('div')
    book.index = index

    for (key in book) {
        if (key === 'read') {
            break
        }
        let tempDiv = document.createElement('div')
        tempDiv.textContent = book[key]
        tempDiv.style.color = 'black'
        tempDiv.style.textAlign = 'center'
        card.appendChild(tempDiv)
    }
    const readBtn = document.createElement('button')
    book.read ? readBtn.textContent = 'Read' : readBtn.textContent = 'Not read'
    readBtn.addEventListener('click', () => {
        readStatus = book.read
        book.read = !readStatus
        book.read ? readBtn.textContent = 'Read' : readBtn.textContent = 'Not read'
    })

    card.appendChild(readBtn)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.dataset.index = book.index
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(removeBtn.dataset.index, 1)
        displayLibrary(myLibrary)
    })

    card.appendChild(removeBtn)
    card.classList.add('card')
    card.dataset.index = book.index
    container.appendChild(card)
}

function displayLibrary(myLibrary) {
    container.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        displayCard(myLibrary[i], i)
    }
}

mainBody = document.querySelector('.main-body')

newBook.addEventListener('click', () => {
    mainBody.classList.toggle('blur')
    form.classList.toggle('invisible')
    form.reset()
})

function addBook() {
    let book = document.querySelector('#book').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    let index = myLibrary.length

    let tempBook = new Book(book, author, pages, read, index)

    if (form.checkValidity()) {
        addBookToLibrary(tempBook)
        displayLibrary(myLibrary)
        form.classList.toggle('invisible')
        mainBody.classList.toggle('blur')
        event.preventDefault()
    }
}

//fix negative number page input
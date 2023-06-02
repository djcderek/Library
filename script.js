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
        //console.log(key)
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

let form = document.querySelector('form')
const newBook = document.querySelector('.newBook')
newBook.addEventListener('click', () => {
    form.classList.toggle('invisible')
    form.reset()
})

function addBook() {
    let book = document.querySelector('#book').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    let tempBook = new Book(book, author, pages, read)

    if (form.checkValidity()) {
        addBookToLibrary(tempBook)
        container.innerHTML = ''
        displayLibrary(myLibrary)
        form.classList.toggle('invisible')
        event.preventDefault()
    }
}

displayLibrary(myLibrary)

//fix negative number page input
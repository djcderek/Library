let myLibrary = []
const container = document.querySelector('.container')
let form = document.querySelector('form')
const newBook = document.querySelector('.newBook')

function Book(title, author, pages, read, index) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = index
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayCard(book, index) {
    const card = document.createElement('div')
    book.index = index
    for (key in book) {
        let tempDiv = document.createElement('div')
        tempDiv.textContent = book[key]
        tempDiv.style.color = 'white'
        //console.log(key)
        card.appendChild(tempDiv)
    }
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.dataset.index = book.index
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(removeBtn.dataset.index, 1)

        //container.innerHTML = ''
        displayLibrary(myLibrary)
        //console.log(myLibrary)
        //console.log(removeBtn.dataset.index)
    })

    card.appendChild(removeBtn)
    card.classList.add('card')
    card.dataset.index = book.index
    //console.log(card.dataset.index)
    container.appendChild(card)
}

function displayLibrary(myLibrary) {
    container.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        displayCard(myLibrary[i], i)
    }
}

newBook.addEventListener('click', () => {
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

    //console.log(myLibrary.length)
    if (form.checkValidity()) {
        addBookToLibrary(tempBook)
        //container.innerHTML = ''
        displayLibrary(myLibrary)
        form.classList.toggle('invisible')
        event.preventDefault()
    }
}

displayLibrary(myLibrary)

//fix negative number page input
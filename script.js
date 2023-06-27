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

    addBookToLibrary() {
        myLibrary.push(this)
    }

    displayCard(index) {
        const card = document.createElement('div')
        this.index = index
        let properties = Object.getOwnPropertyNames(this)

        properties.forEach( key => {
            if (key === 'read' || key === 'index') {
            } else {
                let tempDiv = document.createElement('div')
                tempDiv.textContent = this[key]
                tempDiv.style.color = 'black'
                tempDiv.style.textAlign = 'center'
                card.appendChild(tempDiv)
            }
        })

        const readBtn = document.createElement('button')
        this.read ? readBtn.textContent = 'Read' : readBtn.textContent = 'Not read'
        readBtn.addEventListener('click', () => {
            let readStatus = this.read
            this.read = !readStatus
            this.read ? readBtn.textContent = 'Read' : readBtn.textContent = 'Not read'
        })

        card.appendChild(readBtn)
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.dataset.index = this.index
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(removeBtn.dataset.index, 1)
            displayLibrary(myLibrary)
        })

        card.appendChild(removeBtn)
        card.classList.add('card')
        card.dataset.index = this.index
        container.appendChild(card)
    }

    displayLibrary(myLibrary) {
        container.innerHTML = ''
        for (let i = 0; i < myLibrary.length; i++) {
            displayCard(myLibrary[i], i)
        }
    }
}

function displayLibrary(myLibrary) {
    container.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
        myLibrary[i].displayCard(i)
        //displayCard(myLibrary[i], i)
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
        event.preventDefault()
        tempBook.addBookToLibrary()
        displayLibrary(myLibrary)
        form.classList.toggle('invisible')
        mainBody.classList.toggle('blur')
        //event.preventDefault()
    }
}
//fix negative number page input
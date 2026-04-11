myLibrary = [];

bookIds = ['af68adf3-e05b-417a-91fc-b2309f51a2e1',
    '99ca76af-f865-4a21-a24f-6801512f7eeb',
    'b32b8f54-e900-496c-aa4c-5f6b2da9f964',
    '76d246c5-d388-4879-968f-121c9bbcbd67',
    '8053abf0-9f4e-4664-bce7-918249be5446',
    '488a3c18-f9b6-4650-8563-d4df73deccaa',
    'f75977d1-46b4-463d-903a-8f7666987342',
    'c7d5e317-f52e-4f7d-a7d0-c3a508e6b342',
]

bookTitles = [
    'Moby Dick',
    'Of Mice and Men',
    'To Kill A MockingBird',
    'Lord of the Flies',
    'The Art of War',
    "Charlotte's Web",
    "One flew over the Cuckoo's Nest",
    '20,000 Leagues Under the Sea',
]

bookAuthors = [
    'Herman Melville',
    'John Steinbeck',
    'Harper Lee',
    'William Golding',
    'Sun Tzu',
    'E.B.White',
    'Ken Kesey',
    'Jules Verne',
]

bookHaveRead = [
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
]

//create dummy library
function addInitialBooksToLibrary() {

    let newBookReadStatus = null;
    let newBookId = null;

    for (let i = 0; i < 8; i++) {
        newBookId = crypto.randomUUID();
        newBookTitle = bookTitles[i];
        newBookAuthor = bookAuthors[i];
        newBookReadStatus = bookHaveRead[i];

        newBookId = new Book(newBookId, newBookTitle, newBookAuthor, newBookReadStatus);

        myLibrary.push(newBookId);
    }
}

addInitialBooksToLibrary();



function Book(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;

}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

let formStatus = {
    isHidden: true,
}


function addBookToLibrary() {

    const addBookSection = document.querySelector(".new-book-section");

    const newBookTitleInput = document.querySelector("#new-book-title-input");
    const newBookAuthorInput = document.querySelector("#new-book-author-input");
    const newBookReadStatusInput = document.querySelector("#new-book-read-status");
    let newBookReadStatus = null;
    let newBookId = null;


    newBookId = crypto.randomUUID();
    console.log(newBookId);
    newBookTitle = newBookTitleInput.value;
    newBookAuthor = newBookAuthorInput.value;
    if (newBookReadStatusInput.value === "yes") {
        newBookReadStatus = true;
    } else {
        newBookReadStatus = false;
    };

    newBookId = new Book(newBookId, newBookTitle, newBookAuthor, newBookReadStatus);

    console.log("new book added");

    myLibrary.push(newBookId);

    console.log(myLibrary);

}



function displayLibrary() {

    // get access to HTML library collection div
    const bookCardSection = document.querySelector("#book-card-section");

    bookCardSection.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {

        // create a book card for each book
        const bookCardDiv = document.createElement("div");
        bookCardDiv.classList.add("book-card");

        const bookTitleDiv = document.createElement("div");
        bookTitleDiv.classList.add("book-card-subdiv");

        const bookTitleLabel = document.createElement("p");
        bookTitleLabel.classList.add("book-attribute-label");
        bookTitleLabel.textContent = "Title: ";

        const bookTitleValueDisplay = document.createElement("p");
        bookTitleValueDisplay.textContent = myLibrary[i].title;


        const bookAuthorDiv = document.createElement("div");
        bookAuthorDiv.classList.add("book-card-subdiv");

        const bookAuthorLabel = document.createElement("p");
        bookAuthorLabel.classList.add("book-attribute-label");
        bookAuthorLabel.textContent = "Author: ";

        const bookAuthorValueDisplay = document.createElement("p");
        bookAuthorValueDisplay.textContent = myLibrary[i].author;


        const bookReadStatusDiv = document.createElement("div");
        bookReadStatusDiv.classList.add("book-card-subdiv");

        const bookReadStatusLabel = document.createElement("p");
        bookReadStatusLabel.classList.add("book-attribute-label");
        bookReadStatusLabel.textContent = "Read?  ";

        const bookReadStatusValueDisplay = document.createElement("p");
        bookReadStatusValueDisplay.textContent = myLibrary[i].read;


        const bookCardButtonsDiv = document.createElement("div");
        bookCardButtonsDiv.classList.add("book-card-subdiv");

        const bookDeleteButton = document.createElement("button");
        //bookDeleteButton.classList.add("book-card-button");
        bookDeleteButton.classList.add("delete-book-button");
        bookDeleteButton.textContent = "Delete Book";
        bookDeleteButton.setAttribute("data", myLibrary[i].id);

        const bookReadButton = document.createElement("button");
        //bookReadButton.classList.add("book-card-button");
        bookReadButton.classList.add("read-book-button");
        bookReadButton.textContent = "Mark as Read";
        bookReadButton.setAttribute("data", myLibrary[i].id);

        bookCardDiv.appendChild(bookTitleDiv);
        bookTitleDiv.appendChild(bookTitleLabel);
        bookTitleDiv.appendChild(bookTitleValueDisplay);

        bookCardDiv.appendChild(bookAuthorDiv)
        bookAuthorDiv.appendChild(bookAuthorLabel);
        bookAuthorDiv.appendChild(bookAuthorValueDisplay);

        bookCardDiv.appendChild(bookReadStatusDiv);
        bookReadStatusDiv.appendChild(bookReadStatusLabel);
        bookReadStatusDiv.appendChild(bookReadStatusValueDisplay);

        bookCardDiv.appendChild(bookCardButtonsDiv);
        bookCardButtonsDiv.appendChild(bookReadButton);
        bookCardButtonsDiv.appendChild(bookDeleteButton);

        bookCardSection.appendChild(bookCardDiv);



    }

}

function deleteBook(buttonAttribute) {
    console.log("deleting book...");
    console.log(myLibrary);

    bookIdToDelete = buttonAttribute;
    console.log("book id to be deleted: ", bookIdToDelete);

    arrayIndex = myLibrary.findIndex(myLibrary => myLibrary.id === bookIdToDelete);
    console.log("array index to be deleted");

    myLibrary.splice(arrayIndex, 1);

    console.log("book should be deleted from array");
    console.log(myLibrary);

    displayLibrary();
    addBookListener();
    readBookListener();
}




const addBookButton = document.querySelector("#new-book-button");


addBookButton.addEventListener("click", () => {
    console.log("add button clicked");
    const addBookSection = document.querySelector(".new-book-section");

    if (formStatus.isHidden) {
        addBookSection.style.display = "flex";
        formStatus.isHidden = false;
        console.log(formStatus)
    } else {
        addBookSection.style.display = "none";
        formStatus.isHidden = true;
        addBookToLibrary();
        displayLibrary();
        addBookListener();
        readBookListener();
        console.log(formStatus)
    }

});

function addBookListener() {
    const deleteBookButtons = document.querySelectorAll(".delete-book-button");

    deleteBookButtons.forEach((deleteBookButton) => {
        deleteBookButton.addEventListener("click", () => {
            console.log("delete book button clicked");
            buttonAttribute = deleteBookButton.getAttribute("data");
            deleteBook(buttonAttribute);
        });
    });
}


function readBookListener() {
    const readBookButtons = document.querySelectorAll(".read-book-button")

    readBookButtons.forEach((readBookButton) => {
        readBookButton.addEventListener('click', () => {
            console.log("read book button clicked");
            bookId = readBookButton.getAttribute("data");
            libraryIndex = myLibrary.findIndex(myLibrary => myLibrary.id === bookId)
            console.log(bookId);
            myLibrary[libraryIndex].toggleRead();
            displayLibrary();

            addBookListener();
            readBookListener();
        });
    });
}


displayLibrary();
addBookListener();
readBookListener();






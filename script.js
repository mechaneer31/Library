const myLibrary = [
    { id: 'af68adf3-e05b-417a-91fc-b2309f51a2e1', title: 'Moby Dick', author: 'Herman Melville' },
    { id: '99ca76af-f865-4a21-a24f-6801512f7eeb', title: 'Of Mice and Men', author: 'John Steinbeck' },
    { id: 'b32b8f54-e900-496c-aa4c-5f6b2da9f964', title: 'To Kill A MockingBird', author: 'Harper Lee' },
    { id: '76d246c5-d388-4879-968f-121c9bbcbd67', title: 'Lord of the Flies', author: 'William Golding' },
    { id: '8053abf0-9f4e-4664-bce7-918249be5446', title: 'The Art of War', author: 'Sun Tzu' },
    { id: '488a3c18-f9b6-4650-8563-d4df73deccaa', title: "Charlotte's Web", author: 'E.B.White' },
    { id: 'f75977d1-46b4-463d-903a-8f7666987342', title: "One flew over the Cuckoo's Nest", author: 'Ken Kesey' },
    { id: 'c7d5e317-f52e-4f7d-a7d0-c3a508e6b342', title: '20,000 Leagues Under the Sea', author: 'Jules Verne' },
];

function Book(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;

}


function addBookToLibrary() {

    const newBookTitleInput = document.querySelector("#add-title-input");

    const newBookAuthorInput = document.querySelector("#add-author-input");



    newBookTitle = newBookTitleInput.value;

    newBookAuthor = newBookAuthorInput.value;



    const book = new Book(newBookTitle, newBookAuthor);

    console.log("new book added");





    myLibrary.push(book);

    console.log(myLibrary);

}



function displayLibrary() {

    // get access to HTML library collection div
    const bookCardSection = document.querySelector("#book-card-section");


    for (let i = 0; i < myLibrary.length; i++) {

        // create a book card for each book
        const bookCardDiv = document.createElement("div");
        bookCardDiv.classList.add("book-card");

        const bookTitleLabel = document.createElement("p");
        bookTitleLabel.classList.add("book-attribute-label");
        bookTitleLabel.textContent = "Title: ";

        const bookTitleValueDisplay = document.createElement("p");
        bookTitleValueDisplay.textContent = myLibrary[i].title;

        const bookAuthorLabel = document.createElement("p");
        bookAuthorLabel.classList.add("book-attribute-label");
        bookAuthorLabel.textContent = "Author: ";

        const bookAuthorValueDisplay = document.createElement("p");
        bookAuthorValueDisplay.textContent = myLibrary[i].author;

        const bookUuidLabel = document.createElement("p");;
        bookUuidLabel.classList.add("book-attribute-label");
        bookUuidLabel.textContent = "Library ID: ";

        const bookUuidValueDisplay = document.createElement("p");
        bookUuidValueDisplay.textContent = myLibrary[i].id;

        bookCardDiv.appendChild(bookTitleLabel);
        bookCardDiv.appendChild(bookTitleValueDisplay);
        bookCardDiv.appendChild(bookAuthorLabel);
        bookCardDiv.appendChild(bookAuthorValueDisplay);
        bookCardDiv.appendChild(bookUuidLabel);
        bookCardDiv.appendChild(bookUuidValueDisplay);

        bookCardSection.appendChild(bookCardDiv);



    }

}


const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", addBookToLibrary);


displayLibrary();

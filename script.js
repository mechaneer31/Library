const myLibrary = [];

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

const addBookButton = document.querySelector("#add-book-button");

addBookButton.addEventListener('click', addBookToLibrary);
let books = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

document.getElementById('addBookBtn').addEventListener('click', function() {
  document.getElementById('bookForm').style.display = 'block';
});

document.getElementById('submitBook').addEventListener('click', function() {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const pages = document.getElementById('bookPages').value;
  const readStatus = document.getElementById('bookReadStatus').value;

  const newBook = new Book(title, author, pages, readStatus);
  books.push(newBook);

  displayBooks();
  document.getElementById('bookForm').style.display = 'none';
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';
  document.getElementById('bookPages').value = '';
});

function displayBooks() {
  const bookContainer = document.getElementById('bookContainer');
  bookContainer.innerHTML = ''; 

  books.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    bookCard.innerHTML = `
      <strong>Title:</strong> ${book.title}<br>
      <strong>Author:</strong> ${book.author}<br>
      <strong>Pages:</strong> ${book.pages}<br>
      <strong>Read:</strong> ${book.readStatus}<br>
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteBook(index);
    });

    bookCard.appendChild(deleteButton);
    bookContainer.appendChild(bookCard);
  });
}

function deleteBook(index) {
  books.splice(index, 1); 
  displayBooks(); 
}
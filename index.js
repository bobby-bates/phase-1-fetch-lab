function fetchBooks() {
  const booksFetch = fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(json => renderBooks(json))
    return booksFetch
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') 
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          renderBooks(data); 
      })
      .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ''; 

  books.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.textContent = book.name;
      bookList.appendChild(bookItem);
  });
}


document.addEventListener('DOMContentLoaded', fetchBooks);

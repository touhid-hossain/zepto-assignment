// script.js
// const apiUrl = "https://gutendex.com/books";
// const searchInput = document.getElementById("search-input");
// const genreFilter = document.getElementById("genre-filter");
// const loadingElement = document.getElementById("loading");
// const errorElement = document.getElementById("error");
// const wishlist = [];
// const paginationElement = document.getElementById("pagination");
// const bookListElement = document.getElementById("book-list");
// const booksPerPage = 4;
// let currentPage = 1;
// const navbarElement = document.getElementById("navbar");
// const wishlistElement = document.getElementById("wishlist");

//   console.log(data);
// Select wishlist buttons after they are rendered
// Pagination Implementation
//SEARCH FUNCTION IMPLEMENT

// function fetchBooks() {
//   loadingElement.style.display = "block"; // Show loading indicator
//   errorElement.style.display = "none"; // Hide error message
//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       //   console.log(data);
//       const books = data.results;
//       function renderBookList(books) {
//         const chunkedBooks = chunk(books, booksPerPage);
//         const currentPageBooks = chunkedBooks[currentPage - 1];
//         bookListElement.innerHTML = "";
//         const bookElements = currentPageBooks.map((book) => {
//           const bookElement = document.createElement("li");
//           bookElement.className = "book-item"; // Add class for animation
//           bookElement.innerHTML = `
//              <h2>${book.title}</h2>
//              <p>Author: ${book.authors?.[0]?.name ?? "Unknown Author"}</p>
//              <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
//              <p>Genre: ${book.subjects?.[0] ?? "Unknown Genre"}</p>
//              <p>ID: ${book.id}</p>
//              <button class="wishlist-button" data-book-id="${
//                book.id
//              }">Add to Wishlist</button>
//                 `;
//           // Trigger animation
//           setTimeout(() => {
//             bookElement.classList.add("show");
//           }, 10); // Delay to allow the browser to register the element
//           return bookElement;
//         });

//         bookListElement.append(...bookElements);

//         renderPagination(chunkedBooks.length);

//         // Pagination Implementation
//         function chunk(arr, size) {
//           return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
//             arr.slice(i * size, (i + 1) * size)
//           );
//         }
//         function renderPagination(numPages) {
//           paginationElement.innerHTML = "";
//           for (let i = 1; i <= numPages; i++) {
//             const pageButton = document.createElement("button");
//             pageButton.textContent = i;
//             pageButton.className = "pagination-number"; // Add the class for styling
//             pageButton.href = "#"; // Set the href or add an event listener for functionality
//             pageButton.addEventListener("click", () => {
//               currentPage = i;
//               renderBookList(books);
//             });
//             paginationElement.appendChild(pageButton);
//           }
//         }

//         // Select wishlist buttons after they are rendered
//         const wishlistButtons = document.querySelectorAll(".wishlist-button");
//         wishlistButtons.forEach((button) => {
//           button.addEventListener("click", (e) => {
//             const bookId = e.target.dataset.bookId;
//             const book = books.find((book) => book.id === parseInt(bookId));
//             if (wishlist.includes(book)) {
//               wishlist.splice(wishlist.indexOf(book), 1);
//               e.target.textContent = "Add to Wishlist";
//             } else {
//               wishlist.push(book);
//               bookListElement.style.display = "block";
//               wishlistElement.style.display = "none";
//               e.target.textContent = "Remove from Wishlist";
//             }
//             // Update the wishlist display
//             renderWishlist();
//           });
//         });
//       }
//       renderBookList(books);

//       //SEARCH FUNCTION IMPLEMENT
//       searchInput.addEventListener("input", (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const filteredBooks = books.filter((book) => {
//           const titleMatch = book.title.toLowerCase().includes(searchTerm);
//           const authorMatch = book.authors?.[0]?.name
//             .toLowerCase()
//             .includes(searchTerm);
//           return titleMatch || authorMatch;
//         });
//         renderBookList(filteredBooks);
//       });

//       //Dropdown Filter Implementation
//       genreFilter.addEventListener("change", (e) => {
//         const selectedGenre = e.target.value;
//         const filteredBooks = books.filter((book) => {
//           if (selectedGenre === "") {
//             return true; // Show all books if "All Genres" is selected
//           }
//           return book.subjects.some((subject) => subject === selectedGenre);
//         });
//         renderBookList(filteredBooks);
//       });

//Dropdown Filter Implementation
//       // Populate the genre filter options dynamically
//       const genres = [
//         ...new Set(
//           books
//             .filter((book) => book.subjects?.[0] !== undefined)
//             .map((book) => book.subjects?.[0])
//         ),
//       ];
//       genres.forEach((genre) => {
//         // console.log('Checking genres', genre)
//         const option = document.createElement("option");
//         option.value = genre;
//         option.textContent = genre;
//         genreFilter.appendChild(option);
//       });
//Dropdown Filter Implementation
//       // Populate the genre filter options dynamically
//       // Wishlist Feature and Pagination
//       function renderWishlist() {
//         wishlistElement.innerHTML = "";
//         wishlist.forEach((book) => {
//           const bookElement = document.createElement("li");
//           bookElement.innerHTML = `
//             <h2>${book.title}</h2>
//             <p>Author: ${book.authors?.[0]?.name ?? "Unknown Author"}</p>
//             <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
//             <p>Genre: ${book.subjects?.[0] ?? "Unknown Genre"}</p>
//             <p>ID: ${book.id}</p>
//           `;
//           wishlistElement.appendChild(bookElement);
//         });
//       }
//Dropdown Filter Implementation
//       // Populate the genre filter options dynamically
//       // Wishlist Feature and Pagination
//       // Add event listeners to the navbar links
//       navbarElement.addEventListener("click", (e) => {
//         if (e.target.tagName === "A") {
//           const href = e.target.getAttribute("href");
//           if (href === "#book-list") {
//             bookListElement.style.display = "block";
//             wishlistElement.style.display = "none";
//           } else if (href === "#wishlist") {
//             bookListElement.style.display = "none";
//             wishlistElement.style.display = "block";
//           }
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//       errorElement.textContent =
//         "Failed to load books. Please try again later.";
//       errorElement.style.display = "block"; // Show error message
//     })
//     .finally(() => {
//       loadingElement.style.display = "none"; // Hide loading indicator
//     });
// }
//Dropdown Filter Implementation
//       // Populate the genre filter options dynamically
//       // Wishlist Feature and Pagination
//       // Add event listeners to the navbar links
// // Call the function to fetch books
// fetchBooks();

// script.js
const apiUrl = "https://gutendex.com/books";
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const wishlist = [];
const paginationElement = document.getElementById("pagination");
const bookListElement = document.getElementById("book-list");
const wishlistElement = document.getElementById("wishlist");
const booksPerPage = 4;
let currentPage = 1;

async function fetchBooks() {
  showLoading();
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    const books = data.results;
    // console.log('Checking fetch response', books)

    renderBookList(books);
    setupGenreFilter(books);
    setupSearch(books);
    setupNavbar();
  } catch (error) {
    handleError(error);
  } finally {
    hideLoading();
  }
}
// show-loading
function showLoading() {
  loadingElement.style.display = "block";
  errorElement.style.display = "none";
}

function hideLoading() {
  loadingElement.style.display = "none";
}

function handleError(error) {
  console.error(error);
  errorElement.textContent = "Failed to load books. Please try again later.";
  errorElement.style.display = "block";
}

function renderBookList(books) {
  const chunkedBooks = chunkArray(books, booksPerPage);
  //   console.log('checking chunked books', chunkedBooks)
  //   console.log('checking current page', currentPage-1)
  const currentPageBooks = chunkedBooks[currentPage - 1] || [];
  //   console.log('check chunk books current', chunkedBooks[currentPage - 1])
  bookListElement.innerHTML = "";

  currentPageBooks.forEach((book) => {
    const bookElement = createBookElement(book);
    bookListElement.appendChild(bookElement);
  });

  renderPagination(chunkedBooks.length, books);
  setupWishlistButtons(books);
}

function createBookElement(book) {
  const bookElement = document.createElement("li");
  bookElement.className = "book-item";
  bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.authors?.[0]?.name ?? "Unknown Author"}</p>
        <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
        <p>Genre: ${book.subjects?.[0] ?? "Unknown Genre"}</p>
        <p>ID: ${book.id}</p>
        <button class="wishlist-button" data-book-id="${
          book.id
        }">Add to Wishlist</button>
    `;
  return bookElement;
}

function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size)
  );
}

// Wishlist Feature and Pagination
function renderPagination(numPages, books) {
  paginationElement.innerHTML = ""; // Clear existing pagination buttons

  // Check if there are no pages to render
  if (numPages === 0) {
    paginationElement.style.display = "none"; // Hide pagination if no pages
    return;
  } else {
    paginationElement.style.display = "block"; // Show pagination if there are pages
  }

  for (let i = 1; i <= numPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = "pagination-number";
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderBookList(books);
    });
    paginationElement.appendChild(pageButton);
  }
}

function setupWishlistButtons(books) {
  const wishlistButtons = document.querySelectorAll(".wishlist-button");
  wishlistButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const bookId = e.target.dataset.bookId;
      const book = books.find((book) => book.id === parseInt(bookId));
      toggleWishlist(book, e.target);
      renderWishlist();
    });
  });
}

function toggleWishlist(book, button) {
  const bookIndex = wishlist.indexOf(book);
  if (bookIndex > -1) {
    wishlist.splice(bookIndex, 1);
    button.textContent = "Add to Wishlist";
  } else {
    wishlist.push(book);
    button.textContent = "Remove from Wishlist";
  }
}

function renderWishlist() {
  wishlistElement.innerHTML = "";
  wishlist.forEach((book) => {
    const bookElement = document.createElement("li");
    bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.authors?.[0]?.name ?? "Unknown Author"}</p>
            <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
            <p>Genre: ${book.subjects?.[0] ?? "Unknown Genre"}</p>
            <p>ID : ${book.id}</p>
        `;
    wishlistElement.appendChild(bookElement);
  });
}
//Dropdown Filter Implementation
function setupGenreFilter(books) {
  const genres = [
    ...new Set(
      books
        .filter((book) => book.subjects?.[0] !== undefined)
        .map((book) => book.subjects?.[0])
    ),
  ];
  // Populate the genre filter options dynamically
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });

  genreFilter.addEventListener("change", (e) => {
    const selectedGenre = e.target.value;
    const filteredBooks = books.filter((book) => {
      if (selectedGenre === "") return true; // Show all books if "All Genres" is selected
      return book.subjects.some((subject) => subject === selectedGenre);
    });
    renderBookList(filteredBooks);
  });
}
// Search-Implementation
function setupSearch(books) {
  const searchInput = document.getElementById("search-input");

  // Load saved search term from localStorage when the page loads
  const savedSearchTerm = localStorage.getItem("searchTerm") || "";
  searchInput.value = savedSearchTerm; // Set the input value to the saved term
  filterAndRenderBooks(savedSearchTerm); // Filter and render books with the saved term

  // Save the search term to localStorage and filter books whenever the user types
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value; // Get the current value of the input
    localStorage.setItem("searchTerm", searchTerm); // Save the search term
    filterAndRenderBooks(searchTerm); // Filter and render books with the current term
  });

  // Function to filter books and render the list
  function filterAndRenderBooks(searchTerm) {
    const filteredBooks = books.filter((book) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const authorMatch = book.authors?.[0]?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return titleMatch || authorMatch;
    });
    renderBookList(filteredBooks); // Render the filtered list
  }
}

// Add event listeners to the navbar links
function setupNavbar() {
  const navbarElement = document.getElementById("navbar");
  navbarElement.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      const href = e.target.getAttribute("href");
      if (href === "#book-list") {
        bookListElement.style.display = "block";
        wishlistElement.style.display = "none";
      } else if (href === "#wishlist") {
        bookListElement.style.display = "none";
        wishlistElement.style.display = "block";
      }
    }
  });
}

// Call the function to fetch books
fetchBooks();

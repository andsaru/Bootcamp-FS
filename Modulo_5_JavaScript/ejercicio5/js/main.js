// Book Constructor
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

// Data inialization
let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 5),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 7),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 9),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 20),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 30),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];

// introducimos ejercicio 5
let displayedBooks = [...books];
// let displayedBooks = Array.from(books);

// Selectors
const booksTbody = document.getElementById("books-body"); 

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

// EJ5 apartado 3
const tfoot = document.querySelector("tfoot");

function updateTable() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas
    // EJ5 Ahora no parte del original, sino del nuevo, por eso displayedBooks
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.sales}</td>
                <td>${book.price}</td>
                <td>
                    <button class="btn btn-danger" id="${book.id}">Remove</button>
                </td>
            </tr>`;
    });

    // EJ5 apartado 3 con reduce
    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0);
    tfoot.textContent = `Precio total ${totalPrice}`;

}

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        // lo borra del original (arriba) y lo borra del nuevo (abajo) y recarga
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
};

updateTable();

// Process form and add a new book

addBookButton.addEventListener("click", e => {
    e.preventDefault(); //evita el comportamiento por defecto, en este caso recargarlo
    
    //console.log(titleInput.value, authorInput.value, salesInput.value, priceInput.value);
    
    const newID = books[books.length-1].id + 1;
    const newBook = new Book(newID, titleInput.value, authorInput.value,
        salesInput.value, Number(priceInput.value));
    
    // Para no repetir codigo creamos newBook arriba y llamamos abajo
    books.push(newBook);
    displayedBooks.push(newBook);

    updateTable();

    addBookButton.parentNode.reset();

});

// Ejercicio 5


const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true; // tenemos que saber si está en un estado o en otro (true o false da =)

// Apartado 1

filterInput.addEventListener("input", e => {
    //parto del original (books) y voy modificando el otro (displayedBooks)
    // Versión 1 teniendo en cuenta las mayúsculas(case sensitive)
    displayedBooks = books.filter(book => book.title.includes(e.target.value)); 
    //console.log(displayedBooks);
    
    // Para tener en cuenta otro campo, incluimos en la condición lo siguiente:
    //  || book.author.includes(e.target.value)

    // Versión 2 - Sin tener en cuenta las mayúsculas
    displayedBooks = books.filter(book => {
        return book.title.toUpperCase().includes(e.target.value.toUpperCase());
    });

    // Versión 2 - En variables paso a paso 
    displayedBooks = books.filter(book => {
        const upperTittle = book.title.toUpperCase();
        const upperInputValue = e.target.value.toUpperCase();

        return upperTittle.includes(upperInputValue);
    });

    updateTable();
});

// Apartado 2

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    // sirve para que tb haga lo contrario, alternara resultado para mostrar ascendente o descendente
    ascendingOrder = !ascendingOrder;

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"
    
    displayedBooks.sort((book1, book2) => {
        return ascendingOrder 
            ? book1.price - book2.price
            : book2.price - book1.price;
    });

    updateTable();
});

// Apartado 3


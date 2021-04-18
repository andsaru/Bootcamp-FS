// Ejercicio 6
// Fetch API + DOM – Paginación en el lado del cliente
// 1. Haremos una petición GET a esta API y guardaremos todos los Posts. Haremos una 
// paginación en nuestro array, de forma que se muestren sólo 20 artículos en el DOM con 
// un h1 para title y un p para el body. 
// Al mostrarse sólo 20 artículos, tendremos que “crear” tantas páginas como sea 
// necesario para poder mostrar el número total de posts en diferentes páginas. 
// Podremos ir navegando por las páginas con un par de botones de anterior / siguiente 
// que actualicen los posts y se mostrarán de 20 en 20 hasta que no queden más. 
// Tendremos que tener cuidado con no pasarnos por delante ni por detrás del array.

//6.1 Paginación del lado del cliente

// Constantes
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20; // Mejor poner como constante, asi asi queremos cammbiar la cifra, es más fácil desde aquí

// Variables para cambiar páginas
let posts = [];
let currentPage = 1;

// Selectores

const postsDiv = document.querySelector("#posts");
//el .forEach nos ayuda a llamar a los dos botones, si tuvieramos solo un boton no haría falta
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

// Utilidades
function fillDiv() {
    // Hago aquí directamente la paginación con la función paginar con el array posts
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    console.log(newPagePosts);
    postsDiv.innerHTML = "";
    // sobre este array le aplico la cración de h3 y p, no sobre posts
    newPagePosts.forEach(post => postsDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`);
}

function changePage(event) {
    // compruebo del boton que ejecuta el evento, si su clase es "previouspage" es ese, si es quiero que 
    // su pagina actual sea uno menos, reduzco y fillDiv, sino lo aumento con una página mas"
    // si estoy en la primera a previous le añado currentPage > 1, porque no puedo ir mas atrás, porque estoy en la primera
    if(event.target.className === "previousPage" & currentPage > 1) {
        currentPage--;
    // la página, si queremos que vaya más alla, tiene que ser estrictamente 5 (PAGE_SIZE) , porque sabemos que el array es 
    // de 100, por tanto si en cada página se muestra 20 elementos, quedaŕan 5 páginas, y si ya es la última, no puedo 
    // ir más para allá, tiene que ser < post.length / PAGE_SIZE, es lo mismo que decir 100 / 5; 
    } else if (event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE){
        currentPage++;
    }
    fillDiv()
}

// Función para paginar con .slice
function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    // https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

fetch(POSTS_URL)
.then(response => response.json())
.then(data => {
    // primero lo copio, luego relleno el Dom, pero con la paginación ya hecha
    posts = [...data];
    fillDiv();
});

console.clear();
// 2. Hacer un login sencillo que haga una petición POST a https://reqres.in/api/login con las 
// credenciales (investigar qué objeto espera recibir). Si tenemos éxito, mostraremos una 
// lista con todos los usuarios de este otro punto de la API: https://reqres.in/api/users. Si no 
// tiene éxito, mostrará una alerta avisando con el error.

// Como tiene múltiples páginas, tendremos que ir solicitando todas las páginas de una en 
// una hasta que no haya más páginas. El parámetro para obtener una página específica 
// es ?page=2. Éste se pondrá al final de la URL. Se recomienda hacer las peticiones en 
// un bucle e ir concatenando los usuarios ya sea a un array o directamente al DOM.
// Considerar hacerlo con async / await. Más información de la API en https://reqres.i

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const userList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click", login);


function login(event) {
    // Para que no se recargue la página
    event.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    
    const config = {
        // queremos enviar, usamos POST ya que que por defecto es GET
        method: "POST",
        headers: {"Content-TYpe": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json()) // console.log(response) a response.json()), ir comprobando
    .then(data => data.error ? alert(data.error) : fetchAllUsers()) // Cambiar a fetchAllUsersV2(USERS_URL)) para
                                                                    // comprovar la alternativa 
}

// Si el primer fetch va bien, el de LOGIN, hace un segundo fetch, sino va bien lanza un error
/* function fetchAllUsers() {
    fetch(USERS_URL)
    .then(response => response.json())
    .then(data => console.log(data))
} */ // y a partir de aquí continuamos con async a la función

async function fetchAllUsers() {
    // nada más entrar hace un fetch y pide todos los datos, con el awiat conseguimos que hasta no
    // se cumpla la promesa de await fetch no pasa a la siguiente línea y lo guarda en la variable
    // USERS_URL
    let response = await fetch(USERS_URL); 
    // bloquea el codigo hasta que no resuelva el response.json()
    // teniendo data los datos del servidor
    let data = await response.json();
    
    // Inicialmente este array esta vacío
    let users = [];

    // esta petición es solo para saber hasta donde llegar y con "data.total_pages", 
    // lo sabemos porque esta ese dato en el servidor. Repitiendose tantas veces el bucle como páginas haya.
    for (let page = 1; page <= data.total_pages; page++) {
        // un fetch para cada pagina "solicitando todas las páginas de una en una"
        // ?page=${page} la primera vez valdrá 1, la segunda 2...y así tantas páginas tenga
        // Y lo guardamos en la variable response
        response = await fetch(`${USERS_URL}?page=${page}`);
        // Y tenemos que hacer otra vez el response.json()
        let newData = await response.json();
        // lo concateno los usuarios que ya tuviera con los que acaban de llegar
        users = users.concat(newData.data); // otra forma users = [...users, ...newData.data]
    
        // voy llenando el array con los datos de usuarios, y una vez que ya este lleno
        // salto a users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
    }
    usersList.innerHTML = ""; // Para vacíar y rellenar
    //creo nuevos elementos en el userslist
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
}


// Alternativa para recuperar todas las páginas de una API utlizando .then()
// con una función recursiva
let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(newData => {
        // nada mas entrar concatena, guarda los usuarios de esa petición
        users = users.concat(newData.data);

        // y si la pagina actual, que la da los datos de la API es más pequeña que el total de
        // de páginas, que también me lo da, vuelvo a llamra  ala misma función en la que estoy.
        // Luego vuelve a function fetchAllUsersV2(URL), luego a fetch(URL), procesa todo y compara
        // hasta que vea que es la última y de falso
        if(newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);
        } else {
            userList.innerHTML = ""; // Para vacíar y rellenar
            //creo nuevos elementos en el userslist
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
        }
    });
}


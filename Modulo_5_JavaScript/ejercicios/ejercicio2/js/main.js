// Constructor
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };
}

// Data
const users = [
    new User("Fran", "Gomez", "Fernandez", "fgomez@gmail.com", 35, "Málaga"),
    new User("Lucía", "García", "Ruiz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Barcelona"),
];

// Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector('#userInfo');
const incrementButton = document.querySelector('#incrementButton');
const emptyButton = document.querySelector("#emptyButton");


// Rellenar Select con opciones
/* for (let user of users){ // con for of
    //console.log(user);
    //console.log(user.name);
    const newOption = document.createElement ("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
}
 */
users.forEach(user => { // con for each
    const newOption = document.createElement ("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
});

// Rellenar la lista con la info de un usuario
function fillList(user) {

    list.innerHTML = "";

    for (const propertyName in user) { // for in es para acceder a las propiedades de un objeto
        const value = user[propertyName];
        
        if (typeof value !== "function") { // si es una función, que no me la imprima
            //console.log(`propertyName: ${propertyName}, value: ${value}`)
            /* const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
            newListItem.classList.add("list-group-item");
            list.appendChild(newListItem); */
    
            //otra forma desde HTML
            list.innerHTML += `<li class="list-group-item"><b>${propertyName}:</b> ${value}</li>`; //+= es concatenar
        }
    }
}
// Estado inicial
fillList(users[0]);

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    
    // Con un ternary
    // e.target === incrementButton)
    //    ? selectedUser.incrementProducts() 
    //    : selectedUser.emptyProducts();

    if (e.target === incrementButton){
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    fillList(selectedUser);//actualiza la lista para que veamos incrementar el valor de productCount
}

// Añadir listeners
select.addEventListener("change", e => {
/*     console.log(users.find(user => { // como lo hariamos con un if
        if (user.name === select.value) {
            return true;
        } else {
            return false;
        }
    })); */
    const selectedUser = users.find(user => user.name === select.value); // con una función de flecha, como buscar elementos en un array
    fillList(selectedUser);
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);








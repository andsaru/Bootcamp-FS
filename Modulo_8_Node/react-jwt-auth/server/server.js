// Importamos nuesro archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();


// Borramos esta parte porque en index.js lo hemos añadido
// const users = require("./routes/users");
// si tuvieramos una carpeta products
// const products = require("./routes/products");
//const login = require("./routes/login");
// Hasta aquí

// Antes de los endpoints, usamos lo middlewares
app.use(express.json());

app.use(cors());

//app.use("/users", users);
//app.use("/login", login);
// Importamos desde index.js la ruta
app.use(require("./routes/index"));

// Conectamos a mongo
mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB successfully"));

app.listen(
    process.env.PORT, 
    () => console.log("Listening on port ", process.env.PORT)
);
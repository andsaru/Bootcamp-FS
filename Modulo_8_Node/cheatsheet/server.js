// Importamos nuesro archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const users = require("./routes/users");
// si tuvieramos una carpeta products
// const products = require("./routes/products");

// Antes de los endpoints, usamos lo middlewares
app.use(express.json());

app.use("/users", users);

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
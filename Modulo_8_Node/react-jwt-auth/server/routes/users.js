const ramda = require("ramda");
const bcrypt = require("bcrypt");

const express = require ("express");
const router = express.Router();

const User = require("../models/user");
const verifyToken = require("../middlewares/auth");

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middleware 1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middleware 2");
    next();
}

// cortamos los endpoints de server.js y lo traemos aquí
router.get("/", verifyToken, async (req, res) => {
   // console.log("Hola desde dentro del get");
   // res.json({message: "Petición GET recibida correctamente"});
   // Similar al find de Mongo. Si el filtro está vacio
   // me devuelve todo los documentos de la colección.
   // Por ej, si pongo role: ADMIN, me buscará aquellos
   // que sean admin
   const PAGE_SIZE = 2;
   const page = req.query.page || 1;

   const count = await User.count();
   // console.log(page);

   User.find({active: true/*role: "ADMIN"*/})
   .skip((page - 1)*PAGE_SIZE) // Número de documentos que saltará
   .limit(PAGE_SIZE) // Número de documentos que devolverá
   .exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok: true, page, pageSize: PAGE_SIZE, count, results: users});
        }
    })
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username.toLowerCase(),
        email: body.email.toLowerCase(),
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedUser});
        }
    });

    // if(body.username) {
    //     res.status(200).json({message: `Recibido username: ${body.username}`});
    // } else {
    //     res.status(400).json({ok: false, message: "El username es obligatorio"});
    // }
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    // Aquí aceptaría la colección de products, por ej
    User.findByIdAndUpdate(
        id, 
        body, 
        { new: true, runValidators: true, context: 'query' }, //options 
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedUser});
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    // Con esta forma borramos totalmente mediante el id del usuario
    // User.findByIdAndRemove(id, (error, removedUser) => {
    //     if(error) {
    //         res.status(400).json({ok: false, error});
    //     } else {
    //         res.status(200).json({ok: true, removedUser});
    //     }
    // });

    // Con esta forma lo borramos, pero queda guardado en nuestra base de datos 
    // si queremos recuperarlo, cambiando el body a {active: false},
    User.findByIdAndUpdate(
        id, 
        {active: false}, 
        { new: true, runValidators: true, context: 'query' }, //options 
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else if(!updatedUser) {
                res.status(400).json({ok: false, error: "User not found"});
            } else {
                res.status(200).json({ok: true, updatedUser});
            }
        }
    );

});

module.exports = router;


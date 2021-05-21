// Configuramos la variable de entorno "PORT"
// para que coja una ya existente o le asigne 
// el 3000 sino existe
process.env.PORT = process.env.PORT || 3000;

// Configuramos la variable de entorno "SEED", 
// para verificar o validar un token dado,
// si ya existe la variable de entorno SEED, lo coge (es true),
// sino pasa a "SUPER SECRET KEY" 
// UNa forma de generar una semilla lo suficientemente aleatoria es
// require("crypto").randomBytes(64).toString("hex");
process.env.SEED = process.env.SEED || "SECRET KEY";
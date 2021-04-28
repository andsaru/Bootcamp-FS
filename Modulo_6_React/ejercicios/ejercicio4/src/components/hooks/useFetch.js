// Hemos creado una carpeta hook, donde guardamos un useFetch (o un useState, useForm...)
// Para llamarlo desde el código, en este caso desde app.js y simplificar el código. Es
// un ejemplo para poder hacerlo genérico en otros ejercicios

import { useEffect } from "react";

function useFetch(url, setState) {
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setState(data));
      }, []);
}

export {useFetch};
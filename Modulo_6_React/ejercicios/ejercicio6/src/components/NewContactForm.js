import { useState } from "react"; 
import ContactList from "./ContactList";

export default function NewContactForm({ setContacts }) {

    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState(""); 
    // const [address, setAddress] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");

    // function handleName(e) {
    //     setName(e.target.value);
    // };

    // function handleLastName(e) {
    //     setLastName(e.target.value);
    // };

    // function handlePhoneNumber(e) {
    //     setPhoneNumber(e.target.value);
    // };

    // function handleAddress(e) {
    //     setAddress(e.target.value);
    // };

    // function handlePostalCode(e) {
    //     setPostalCode(e.target.value);
    // };
    
    // function handleCity(e) {
    //     setCity(e.target.value);
    // };

    //Simplificación de la función NewContactForm({ setContacts }) para evitar repetir código
    const initialState = {
        name: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        postalCode: "",
        city:""
    };

    const [form, setForm] = useState(initialState);

    // Pilla el evento e imprimirá el input que la haya llamado
    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;
        // Parto del formulario que ya tengo + una propiedad que va a sobreescribir la anterior, porque entra en conflicto
        setForm({ ...form, ...{[inputName]: newValue} })
    }

    function submit(e) {
        e.preventDefault();

        // newContact se podría pasar en setContacts, pero con form, es lo mismo, más rápido
        // const newContact = {
        //     name: form.name,
        //     lastName: form.lastName,
        //     address: form.address,
        //     postalCode: form.postalCode,
        //     city: form.city,
        //     phoneNumber: form.phoneNumber
        // };

        // Es lo mismo que lo de arriba pero es una forma de no repetirla // Hasta que le hemos metido el form, con la forma más abreviada de hacerla
        // const newContact = {name, lastName, address, postalCode, city, phoneNumber};

        // Estoy importando la función, la nueva, más la que ya tengo
        // setContacts([...contacts, newContact] // Necesitaría recibir "contacts"
        setContacts(currentContacts => [...currentContacts, form]);

        //console.log(newContact);

        // vaciar los campos del formulario
        // e.target.reset(); // Con esta línea ya lo haría, pero los estados seguirían guardados
        // Aquí reset campo a campo tras dare valor a los inputs ej value={name}
        // setName("");
        // setLastName("");
        // setAddress("");
        // setCity("");
        // setPostalCode("");
        // setPhoneNumber("");
        setForm(initialState); // Reiniciamos el formulario
    }

    // Los values cambian de value={name} a value={form.name} ya no dependen de variables, sino de propiedades de mi objeto
    // Tengo una unica propiedad que es form, y dentro 6 variables, name, lastname...
    // Esto lo hago para simplificar la función NewContactForm({ setContacts })
    // Cada vez que cambie algún formulario se ejecutará la función handleInput
    // También cambiaremos todos los onChange={handleName} y el resto por onChange={handleInput}
    // Todas tienen la misma función
    return (
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" id="name"        value={form.name}        onChange={handleInput} placeholder="Introduce el nombre"/>
            <input className="form-control mb-3" type="text" id="lastName"    value={form.lastName}    onChange={handleInput} placeholder="Introduce los apellidos"/>
            <input className="form-control mb-3" type="text" id="phoneNumber" value={form.phoneNumber} onChange={handleInput} placeholder="Introduce el teléfono"/>
            <input className="form-control mb-3" type="text" id="address"     value={form.address}     onChange={handleInput} placeholder="Introduce la dirección"/>
            <input className="form-control mb-3" type="text" id="postalCode"  value={form.postalCode}  onChange={handleInput} placeholder="Introduce el código postal"/>
            <input className="form-control mb-3" type="text" id="city"        value={form.city}        onChange={handleInput} placeholder="Introduce la ciudad"/>
            <input type="submit" className="btn btn-success" value="Registrar"/>
        </form>
    )
}



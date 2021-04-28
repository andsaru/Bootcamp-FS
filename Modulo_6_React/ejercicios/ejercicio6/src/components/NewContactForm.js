import { useState, useContext } from "react"; 
import { GlobalContext } from "../App";

export default function NewContactForm() {

    // llamo a setcontacts del contexto
    const {setContacts} = useContext(GlobalContext)

    const initialState = {
        name: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        postalCode: "",
        city:""
    };

    const [form, setForm] = useState(initialState);

    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;
        // Parto del formulario que ya tengo + una propiedad que va a sobreescribir la anterior, porque entra en conflicto
        setForm({ ...form, ...{[inputName]: newValue} })
    }

    function submit(e) {
        e.preventDefault();

        setContacts(currentContacts => [...currentContacts, form]);

        setForm(initialState); // Reiniciamos el formulario
    }

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



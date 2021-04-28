export default function ContactList({ contacts, setContacts }) {

    const removeContact = phoneNumber => {
        // para cada contacto quiero quitar solo aquel que tenga un phonenumber que sea diferente de phonenumber
        return e => setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber))
    }


    // -- Otra forma de hacer la función Eliminar contacto --
    // function removeContact(phoneNumber) {
    //     setContacts(contacts.filter((c, i) => i !== phoneNumber))
    // };
    // // Luego el evento onClick en el boton Eliminar sería
    // // onClick={()=>removeContact(phoneNumber)}

    return (
        <div className="row">
            {contacts.map((contact, index) => {
                return (
                    <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phoneNumber} >
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.phoneNumber}</li>
                        <li className="list-group-item">{contact.address}, {contact.postalCode}, {contact.city}</li>
                        <li className="list-group-item">
                            <button className="btn btn-warning" onClick={removeContact(contact.phoneNumber)}>Eliminar</button>
                        </li>
                    </ul>
                );
            })}
        </div>
    )
}

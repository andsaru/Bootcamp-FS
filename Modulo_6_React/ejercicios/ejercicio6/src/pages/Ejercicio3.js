import { useState } from "react";
import ContactList  from "../components/ContactList";
import NewContactForm from "../components/NewContactForm";


export default function Ejercicio3() {

  // Si el array estuviera inicialmente vacío, sería; 
  // const [contacts, setContact] = useState([]);
  // Pero tenemos 3 estados iniciales

  const initialContactsState = [
    {name: "Federico", lastName: "García Lorca", address: "Calle X", city: "Granada", postalCode: 27009, phoneNumber: 4582165478 },
    {name: "Miguel", lastName: "Hernandez", address: "Calle Y", city: "Madrid", postalCode: 27021, phoneNumber: 4586523478 },
    {name: "Rafael", lastName: "Alberti", address: "Calle Z", city: "Cádiz", postalCode: 11230, phoneNumber: 224765478 },
  ];

  const [contacts, setContacts] = useState(initialContactsState);
  
  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
      <ContactList contacts={contacts} setContacts={setContacts}/>

      <h2 className="my-4">Nuevo contacto</h2>
      <NewContactForm setContacts={setContacts}/>
    </div>
  );
}



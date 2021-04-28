import ContactList  from "../components/ContactList";
import NewContactForm from "../components/NewContactForm";

export default function Ejercicio3() {

  // Quito el estado (const initialContactsState) y lo paso a la App

  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
      <ContactList />

      <h2 className="my-4">Nuevo contacto</h2>
      <NewContactForm />
    </div>
  );
}



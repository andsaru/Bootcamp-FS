import { createContext, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import Ejercicio1 from "./pages/Ejercicio1"
import Ejercicio2 from "./pages/Ejercicio2"
import Ejercicio3 from "./pages/Ejercicio3"
import Ejercicio4 from "./pages/Ejercicio4"

// Ejercicio6 apartado 2, creamos un contexto y <GlobalContext.Provider> abajo
export const GlobalContext = createContext({});

function App() {

  const initialContactsState = [
    {name: "Federico", lastName: "García Lorca", address: "Calle X", city: "Granada", postalCode: 27009, phoneNumber: 4582165478 },
    {name: "Miguel", lastName: "Hernandez", address: "Calle Y", city: "Madrid", postalCode: 27021, phoneNumber: 4586523478 },
    {name: "Rafael", lastName: "Alberti", address: "Calle Z", city: "Cádiz", postalCode: 11230, phoneNumber: 224765478 },
  ];

  const [contacts, setContacts] = useState(initialContactsState);

  // Subimos el estado del ejercicio 4
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  // El 20 es el limit que le he pasado en su función en la carpeta hooks
  useFetch(API_TODOS, setTodos, 20);
  // Y aquí el useFetch de la carpeta Hook

  return (
    <div className="App">

      <BrowserRouter>
      <nav className="navbar px-5 py-3 bg-dark">
        <NavLink to="/" className="text-decoration-none text-light font-weight-bold" activeClassName="active" exact>Ejercicio 1</NavLink>
        <NavLink to="/ejercicio2" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 2</NavLink>
        <NavLink to="/ejercicio3" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 3</NavLink>
        <NavLink to="/ejercicio4" className="text-decoration-none text-light font-weight-bold" activeClassName="active">Ejercicio 4</NavLink>
      </nav>

      <GlobalContext.Provider value={{contacts, setContacts, todos, setTodos}}>
        <Switch >
          <Route exact path="/" component={Ejercicio1}/>
          <Route path="/ejercicio2" component={Ejercicio2}/>
          <Route path="/ejercicio3" component={Ejercicio3}/>
          <Route path="/ejercicio4" component={Ejercicio4}/>
        </Switch>
      </GlobalContext.Provider>  

      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Counter from './components/Counter';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

import UseEffectsComponent from './components/UseEffectsComponent';
import UseContextComponent from './components/UseContextComponent';

import { useState, createContext } from "react";
import Router from "./Router";

// Para useContext, lo creamos fuera y también tenemos que importarlo
export const GlobalContext = createContext();


function App() {
  // Si lo pongo a true aparecera el botón Show en false no
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/*si show es verdad el && lógico mira lo de la derecha y lo imprime*/}
      {show && <UseEffectsComponent />}
      {/* (!show) para mostrar lo contrario, es decir cuando pulse el botn se muestre 
      el contador, cuando le vuelva a dar, esconde el contador */}
      <button onClick={() =>setShow(!show)}>Show</button>

      {/* <Counter />

      <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="otro tulo enviado desde el padre"/>
      <SecondComponent />
      <ThirdComponent /> */}

      <GlobalContext.Provider value="Soy un string guardado en un contexto; useContext.">
        <UseContextComponent />
      </GlobalContext.Provider>
      
      <Router />
    </div>
  );
}

export default App;

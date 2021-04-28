import './App.css';
import Counter from './components/Counter';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import UseEffectsComponent from './components/UseEffectsComponent';

import { useState } from "react";

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
    </div>
  );
}

export default App;

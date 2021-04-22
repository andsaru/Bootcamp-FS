import './App.css';
import Counter from './components/Counter';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="otro tulo enviado desde el padre"/>
      <SecondComponent />
      <ThirdComponent /> */}
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/Cards';

function App() {
  return (
    <div className="text-align-center">
      <Card 
        title="Título 1"
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio velit non quae?"
        href="https//google.com"
        linkText="Más información"
        imgUrl="https://culturageek.com.ar/wp-content/uploads/2019/07/Culturageek.com_.ar-Lord-of-the-Rings-MMO-1-768x431.jpg"
      />
      <Card 
        title="Las dos torres"
        paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio velit non quae?"
        href="https//google.com"
        linkText="Actualización"
        imgUrl="https://culturageek.com.ar/wp-content/uploads/2019/07/Culturageek.com_.ar-Lord-of-the-Rings-MMO-2.jpg"
      />     
    </div>

  );
}

export default App;

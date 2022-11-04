import './App.css';
import Recipe from './Recipe.js';
function App() {
  return (
    <Recipe name="Pizzateig" image="pizza.jpg" ingredients={['500 ml Wasser','1000g Mehl', '40g Hefe', '20g Salz', '25ml Öl', '1 Prise Zucker']} 
      description={['Mehl mit Salz auf die Arbeitsfläche oder in eine Schüssel sieben, in die Mitte eine Mulde drücken.',
       'Hefe mit Wasser und Zucker in die Mulde gießen.',
       'Von der Mitte her alles gründlich vermischen, nach und nach Olivenöl zugeben und alles zu einem losen Teig verarbeiten.',
       'Den Teig auf der Arbeitsfläche mit den Händen 5 Minuten kräftig kneten, bis er elastisch und geschmeidig ist.',
       'Teig zugedeckt bei Zimmertemperatur etwa 30-45 Minuten gehen lassen.']}    />
  );
}

export default App;
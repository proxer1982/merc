import './App.css';
import BarraNav from './components/barranav';

function App() {
  /*function enviarDatos(){
    fetch('http://localhost:5001/consultar')
    .then(resp => resp.text())
    .then(data => console.log(data))
  }*/
  return (
    <div className="App" class="w-100 h-100">
      <BarraNav></BarraNav>
    </div>
  );
}

export default App;

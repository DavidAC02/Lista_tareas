import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
      <div className="foot">
        Creado por DavidAC<br/>
        Siguiendo el curso de freeCodeCamp
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <Contador start={0} factor={5}></Contador>    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Piano } from './components/piano/Piano.js'
import { Guitar } from './components/guitar/Guitar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Piano />
        <Guitar />
      </header>
    </div>
  );
}

export default App;

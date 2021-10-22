import './App.css';
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/random">Random</Link>
      </nav>
      <main>
        <h1>Pedal Base</h1>
        <input type="text"/>
        <input type="submit"/>
      </main>
    </div>
  );
}

export default App;

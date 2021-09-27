import logo from './logo.svg';
import './App.css';
import Hello from './Hello' //this is a function based component
import {name} from './Hello' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Hello/>
       <p>My name is {name}</p>
        
      </header>
    </div>
  );
}

export default App;

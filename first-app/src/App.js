import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' //this is a function based component
import { name } from './components/Greet' //function variable
import ClassGreeting from './components/ClassGreeting'; //class component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet greetName="greeting a name" color="yellow" />
        <Greet greetName="Alexsandra" color="red" />
        <p>My name is {name}</p>
        <ClassGreeting />

      </header>
    </div>
  );
}

export default App;

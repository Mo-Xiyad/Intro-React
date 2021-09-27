import './App.css'
import HelloWorld, { strive } from './HelloWorld'
// import { strive } from './HelloWorld'
import ClassComponent from './ClassComponent'

// this is a React Component
// a React Component can be as simple as a function returning JSX

const batch = 'Aug21'

function App() {
  return (
    // THIS IS CALLED JSX
    <div className="App">
      {/* className is just for applying a CSS class */}
      <header className="App-header">
        <div>Welcome, {batch}</div>
        <HelloWorld />
        <h1>Page Title! {strive}</h1>
        <ClassComponent />
        <ClassComponent />
      </header>
    </div>
  )
}

export default App


import './App.css'
import MyComponent from './components/MyComponent/MyComponent'
import Todos from './components/Todos/Todos'
function App() {
  

  return (
    <div className='App'>
     <MyComponent/>
     <p>List of Todos:</p>
     <Todos/>
    </div>
  )
}

export default App

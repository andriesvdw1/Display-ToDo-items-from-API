
import './App.css'
import MyComponent from './components/MyComponent/MyComponent'
import Todos from './components/Todos/Todos'
import Form from './components/Form/Form'
function App() {
  

  return (
    <div className='App'>
     <MyComponent/>
     <Form/>
     <p>List of Todos:</p>
     <Todos/>
    </div>
  )
}

export default App

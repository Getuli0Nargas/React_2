import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [cont, setCont] = useState(0)
  const [title, setTitle] = useState(true)
  const [value, setValue] = useState(false)
  const [post,setPost] = useState(true)

  if(value == "senaii"){
  return alert("apareci!!")
  }
  return (
    <>
    function App() {
      <div className="card">
        <button onClick={() => setCont((cont) => cont + 10)}>
          cont is {cont}
        </button>
        <div className="card">
        <button onClick={() => setCont((cont) => cont - 10)}>
          cont is {cont}
        </button>
       </div>
       <button onClick={() => setTitle (title ? false : true)}>sumir</button> 
    {title ? <h1>sem titulo</h1> : <h1>BALACOBACO</h1>}
    <div className=''>
      <h1>{value}</h1>
      <input type="text" onChange={(e)=> setValue(e.target.value)} /> 
      </div>
      <div className=''>
      <button onClick={() => setTitle (title ? false : true)}>sumir</button> 
    {title ? <h1>da like</h1> : <h1>❤</h1>}
      </div>
      </div>
} 
    </>
  )
}
export default App

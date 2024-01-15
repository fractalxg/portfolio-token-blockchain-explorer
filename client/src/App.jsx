import { useState } from 'react'
import Header from '../components/header/Header'
import Home from '../routes/Home'
import './App.css'

function App() {
  const[contentText, setContentText] = useState({
    search:"Token explorer",
    placeholder:"Type a token name...",
    title:"Title",
    address:"Address",
    price:"Price"
  })
 
  return (
    <div>
      <Header contentText={contentText} setContentText={setContentText}/>
      <Home contentText={contentText} />
    </div>
  )
}

export default App

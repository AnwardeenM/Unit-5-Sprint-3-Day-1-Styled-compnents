// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import { Button } from './components/Button'
import {Button} from "./components/button";

function App() {
  // const [count, setCount] = useState(0);
  // const [theam,setTheam]=useState("light")

  return (
    <div className="App">

      <Button className='btn1' type="primary">Primary Button</Button>
      <Button className='btn2' >Default Button</Button>
      <Button className='btn3'  type="dashed">Dashed Button</Button>
    <br />
    <Button className='btn4'  type="text">Text Button</Button>
    <Button className='btn5'  type="link">Link Button</Button>

    </div>
  )
}

export default App
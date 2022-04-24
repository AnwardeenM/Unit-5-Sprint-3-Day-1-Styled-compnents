// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import { Button } from './components/Button'
import {Button} from "./components/button";

function App() {

  return (
    <div className="App">

      
    <Button
        theme={"primary"}
        border={"NormalBorder"}>
        Primary Button
      </Button>
      <Button
        border={"NormalBorder"}
      >
        Default Button
      </Button>
      <Button
        border={"DashedBorder"}
      >
        Dashed Button
      </Button>

      <Button
        borderNone={"None"}
        border={"NormalBorder"}
      >
        Text Button
      </Button>

      <Button
        borderNone={"None"}
        border={"NormalBorder"}
        color={"aqua"}
        
      >
        Link Button
      </Button>
    </div>
  )
}

export default App
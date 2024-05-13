import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

// this function does work, but isn't as efficient as using useState
// const updateText = () => { 
//   document.querySelector("#updatedText").innerText = document.querySelector('#textBox').value
// }

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <input type="text" id="textBox" onChange={(e) => setInput(e.target.value)}></input>
      <h2 id="updatedText">{input}</h2>
    </div>
  );
}

export default App;

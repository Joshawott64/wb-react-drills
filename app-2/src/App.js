import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const array = ['spaghetti', 'ice cream', 'sushi', 'soup', 'bread', 'salad', 'cereal']

function App() {
  const [wordArray, setWordArray] = useState(array)

  const listItems = wordArray.map((word) => 
    <li key={word}>{word}</li>
  )

  return (
    <div className="App">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;

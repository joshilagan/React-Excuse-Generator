import './App.css';
import { useState } from 'react';
import Axios from "axios";

function App() {
  const [ getExcuse, setGetExcuse] = useState("");

  const partyExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      setGetExcuse(res.data[0].excuse);
    });
  };
  return (
    <div className="App">
      <div className='container'>
        <p> Generate An Excuse</p>
        <button onClick={() => partyExcuse("party")}>Party</button>
        <button onClick={() => partyExcuse("family")}>Family</button>
        <button onClick={() => partyExcuse("office")}>Office</button>
        <h1>{getExcuse}</h1>
      </div>
    </div>
  );
}

export default App;
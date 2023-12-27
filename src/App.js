import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Firstcomponent from './Firstcomponent.js';
import Studentprops from './Studentprops.js';


function App() {
  const [data,setData] = useState('Narendra');
  const [val,setVal] = useState(null);
  const [print,setPrint] = useState(false);
  function getInputData(val){
    setVal(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
        print ? <h3>{val}</h3> : null
      }
      <button onClick={()=>setPrint(true)}>Print Data</button>
      <h2>{val}</h2>
      <input type='text' onChange={getInputData}/>
      <h1>{data}</h1>
      <Firstcomponent />
      <Studentprops name={"sujeet"} email={"sujeet@mail.com"} other={{address:"delhi",phone:"8978678"}}/>
      <button onClick={()=>setData("Modi")}>Change Name</button>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quas non numquam iste nam enim culpa, aliquid error, neque quis dolore. Eveniet unde veritatis quisquam est earum repudiandae tempore enim?</p>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent.js';
import Studentprops from './Studentprops.js';


function App() {
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
      <Firstcomponent />
      <Studentprops name={"sujeet"} email={"sujeet@mail.com"} other={{address:"delhi",phone:"8978678"}}/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quas non numquam iste nam enim culpa, aliquid error, neque quis dolore. Eveniet unde veritatis quisquam est earum repudiandae tempore enim?</p>
    </div>
  );
}

export default App;

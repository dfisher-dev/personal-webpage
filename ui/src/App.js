import logo from './logo.svg';
import './App.css';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="corner top-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="corner top-right">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="corner bottom-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="corner bottom-right">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Welcome to My Personal Webpage!</h1>
        <p>
          I'm glad you're here. Feel free to explore and learn more about me.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Main;

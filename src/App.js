import './App.css';
import Logo from './Troll.png';
import Main from './Wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="Logo" height="34px" />
        <h2 className="Header-text">Memetor</h2>
      </header>
      <Main />
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kvizt 
        </p>
        <Link to={"/join"}>Join quiz</Link>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import './petr.png'
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="main">
      <LoginForm />
      <div className="petr">
        <img className="petr-image spin" src={require("./petr.png")} alt='petr'></img>
      </div>
    </div>
  );
}

export default App;

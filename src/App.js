import './App.css';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="main">
      <LoginForm />
      <div className="petr">
        <img className="petr-image spin" src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9a7595c-79f0-4c8c-863b-8b2cec78fcba/petr.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221120T210405Z&X-Amz-Expires=86400&X-Amz-Signature=5c2b4b63ef00dfc4e29ca7ecbba1c846e44020fb50cf5a15b668290c303163bd&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22petr.png%22&x-id=GetObject' alt='petr'></img>
      </div>
    </div>
  );
}

export default App;

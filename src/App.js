import './App.css';
import LoginForm from './components/Login/Login';

function App() {

  const onValueChange = (value) => {
    console.log(value)
  }

  const onSubmit = () => {
    console.log('Click worked!')
  }

  return (
    <div className="App">
      <LoginForm onValueChange={onValueChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

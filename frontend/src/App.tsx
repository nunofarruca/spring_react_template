import './App.scss';
import { Counter } from './counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/logo512.png" className="App-logo" alt="logo" />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;

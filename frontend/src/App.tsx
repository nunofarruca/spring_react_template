import './App.scss';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/logo512.png" className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;

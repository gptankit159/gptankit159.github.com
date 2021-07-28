import './App.css';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
    <div>
      <h4>There are 4 counter component instances that each manage their own state.</h4>
      <div className="row">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      </div>
    </div>
    </div>
  );
}

export default App;

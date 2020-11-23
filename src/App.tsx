import React from 'react';
import { TextField } from './TextField'
import { Counter } from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TextField handleChange ={e => e.preventDefault()} />
        <Counter>
          {(count, setCount) => <div> {count}<button onClick={() => setCount(count + 1)}>+</button></div>}
        </Counter>
      </header>
    </div>
  );
}

export default App;

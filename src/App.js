import React, { useState } from 'react';
import './App.css';
import SceneContainer from './3DComponents/SceneContainer';

function App() {
  const [boxRotationSpeed, setBoxRotationSpeed] = useState(1);
  const [clickCounter, setClickCounter] = useState(0);
  const [boxWidth, setBoxWidth] = useState(2);

  return (
    <div className="App">
      <h1>3D in React application</h1>
      <SceneContainer
        boxRotationSpeed={boxRotationSpeed}
        incrementClickCounter={() => setClickCounter(clickCounter + 1)}
        boxWidth={boxWidth}
      />
      <div className="control-item">
        <label>Rotation speed</label>
        <input
          value={boxRotationSpeed}
          type="number"
          onChange={event => setBoxRotationSpeed(parseInt(event.target.value, 10))}
        />
      </div>
      <div className="control-item">
        <label>Box width</label>
        <input
          value={boxWidth}
          type="range"
          min={1}
          max={8}
          step={1}
          onChange={event => setBoxWidth(parseInt(event.target.value, 10))}
        />
      </div>
      <p>You clicked box {clickCounter} times.</p>
    </div>
  );
}

export default App;

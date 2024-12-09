import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  
  const predefinedColors = ['Red', 'Green', 'Blue', 'Pink', 'Purple'];

 
  const handleRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Background Color Changer</h1>
        <div className="buttons">
          {predefinedColors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color, color: '#fff', margin: '5px', padding: '10px' }}
              onMouseEnter={() => setBgColor(color)}   
            >
              {color}
            </button>
          ))}
        </div>
        <button
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 20px',
            marginTop: '20px',
            cursor: 'pointer',
          }}
          onClick={handleRandomColor}
        >
          Random Color
        </button>
      </header>
    </div>
  );
}

export default App;

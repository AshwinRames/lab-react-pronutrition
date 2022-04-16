import React from 'react';
import FoodBox from './components/FoodBox';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="header">Pro-Nutritions</div>
      <FoodBox />
    </React.Fragment>
  );
}

export default App;

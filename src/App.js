import React from 'react';
import './App.css';
import {useWindowWidth} from "./useWindowWidth";

function App() {
  const width = useWindowWidth();
  return (
      <h1>Window width is: {width} </h1>
  );
}
export default App;

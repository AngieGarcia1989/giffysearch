/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';



function App() {


  return (
    <div className="App">
      <section className="App-content">
      <ListOfGifs keyword='escandalosos'/>
      </section>
    </div>
  );
 }

export default App;

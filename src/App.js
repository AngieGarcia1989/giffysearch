/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import {Link, Route} from 'wouter'

function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/Colombia'>Gifs de Colombia</Link>
        <Link to='/gif/Panda'>Gifs de Panda</Link>
        <Link to='/gif/Gumball'>Gifs de Gumball</Link>
        <Route path="/gif/:keyword" component={ListOfGifs}/>
      
      </section>
    </div>
  );
 }

export default App;

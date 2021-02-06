/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import SearchResults from './Pages/SearchResults';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import {Link, Route} from 'wouter';
import LOGO from './Imagens/descarga.jpeg'

function App() {


  return (
    <div className="App">
      <section className="App-content">
        
        <Link to="/">
          <img className= "App-logo" alt= 'gify' src={LOGO}/>
        </Link>
        <Route path="/" component={Home}/>
        <Route path="/search/:keyword" component={SearchResults}/>
        <Route path="/gif/:id" component={Detail}/>
      </section>
    </div>
  );
 }

export default App;

/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import './App.css';
import Getgif from './Service/Getgif';



function App() {
  const [gifs,setGifs] = useState([])

  useEffect(function () {
    Getgif({keyword:'gumball'}).then(change => setGifs(change))

  },[])


  return (
    <div className="App">
      <section className="App-content">
        {
        gifs.map(singleGif => <img src={singleGif.url}/>)
        }
      </section>
    </div>
  );
      }

export default App;

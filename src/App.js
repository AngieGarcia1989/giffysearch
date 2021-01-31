import React, {useState, useEffect} from 'react';
import './App.css';
import Getgif from './Service/Getgif';



function App() {
  const [gifs,setGifs] = useState([])

  useEffect(function () {
    Getgif().then(change => setGifs(change))

  },[])


  return (
    <div className="App">
      <section className="App-content">
        {
        gifs.map(singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  );
      }

export default App;

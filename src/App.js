import React, {useState, useEffect} from 'react';
import './App.css';

const url_API= 'https://api.giphy.com/v1/gifs/search?api_key=C8ShkkqqBNUg5lGIYLxtDDENUvG6DRLy&q=POMERANIA&limit=10&offset=0&rating=g&lang=en'


function App() {
  const [gifs,setGifs] = useState([])
  useEffect(function () {
    fetch(url_API)
    .then(res => res.json())
    .then(response =>{
      const{data} = response
      const gifs_P = data.map(image => image.images.downsized_medium.url)
      setGifs(gifs_P)
    })

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

import React, {useState} from 'react';
import './App.css';

const GIF = [
  'https://media.giphy.com/media/LwhhZsEHFQgSs/giphy.gif',
  'https://media.giphy.com/media/M1elR4TgD86sM/giphy.gif'
]
function App() {
  const [gifs,setGifs] = useState(GIF)
 
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

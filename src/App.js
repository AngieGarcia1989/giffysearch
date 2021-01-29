import React, {useState} from 'react';
import './App.css';

function App() {
  const [gifs,setgifs] = useState(['https://media.giphy.com/media/LwhhZsEHFQgSs/giphy.gif'])
 
  return (
    <div className="App">
      <section className="App-content">
        <img src={gifs}/>
      </section>
    </div>
  );
}

export default App;

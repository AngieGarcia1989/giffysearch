import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import Getgif from '../Service/Getgif';

export default function ListOfGifs ({keyword}) {
  const [gifs,setGifs] = useState([])

  useEffect(function () {
    Getgif({keyword}).then(change => setGifs(change))

  },[keyword])



    return gifs.map(({id,title,url,images}) => 
        <Gif
          Key={id}
          title={title} 
          url={url} 
          id={id}
        images={images}/>
        )
}
import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import Getgif from '../Service/Getgif';
import loader from '../Imagens/tenor.png'


export default function ListOfGifs ({params}) {
  const {keyword}= params
  const [loading,setloading]= useState([false])
  const [gifs,setGifs] = useState([])

  useEffect(function () {
    setloading(true)
    Getgif({keyword})
    .then(change => {
      setGifs(change)
      setloading(false)
    })
    
    
  },[keyword])

if (loading) return<img className='carga' src={loader} alt="cargando..."/>

    return <div>
    { 
    gifs.map(({id,title,url,images}) => 
  
        <Gif
          Key={id}
          title={title} 
          url={url} 
          id={id}
        images={images}/>
        )
};
</div>
}
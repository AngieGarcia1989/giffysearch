import React from 'react'
import Gif from './Gif'

export default function ListOfGifs ({gifs}) {
    return gifs.map(({id,title,url,}) => 
        <Gif
          Key={id}
          title={title} 
          url={url} 
          id={id}/>
        
        )
}
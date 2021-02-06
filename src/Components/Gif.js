import React from 'react'
import {link} from 'wouter'
import './Gif.css'

export default function Gif ({id,title,url}) {
    return (
    <div className='Gif'>
      <link to={`/gif/${id}`} className="Gif-link">
            <h4>{title}</h4>
            <img alt={title} src={url}/>
          </link>
          </div>
    )
}
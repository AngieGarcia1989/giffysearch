import React,{useState} from 'react'
import {Link,useLocation} from 'wouter'

const POPULAR_GIFS = ["matrix","chile", "colombia", "ecuador"]

export default function Home() {
    const [keyword,setkeyword] = useState ("")
    const [path,pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handlechange = evt => {
        setkeyword(evt.target.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
       
        <input placeholder="search a gif here..." onChange={handlechange} type="text" value={keyword}/>
            
        </form>
        <h3 className="App-title">Los Giffs más populares </h3>
        
        <ul>
{ POPULAR_GIFS.map((popularGif) =>(
    <li key={popularGif}>
        <Link className="link" to ={`/search/${popularGif}`}>Gifs de {popularGif} </Link>
    </li>
))}
        </ul>
        </>
    )
}
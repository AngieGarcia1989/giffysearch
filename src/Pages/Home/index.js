import React from 'react'
import {Link} from 'wouter'

const POPULAR_GIFS = ["matrix","chile", "colombia", "ecuador"]

export default function Home() {
    return(
        <>
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
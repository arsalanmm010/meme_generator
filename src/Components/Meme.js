import React from 'react';
import Data from './Data'
export default function Meme() {

    const [link, setLink] = React.useState("");
    function getImage() {
        const meme = Data.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        setLink(meme[randomNumber].url)
    }   

  return (
    <main className="meme">
        <div className="form">
            <input type="text" className="form-input" placeholder="Shutup"></input>
            <input type="text" className="form-input" placeholder="take my money"></input>
            <button onClick={getImage} type="button" className="btn">Get a new meme image</button>
        </div>
        <img src={link} alt="" className='memeImg'/>
    </main>
  )
}


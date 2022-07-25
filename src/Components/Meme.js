import React from 'react';
import Data from './Data'
export default function Meme() {

    // const [link, setLink] = React.useState("");
    const [memes, setMemes] = React.useState({
      topText : "",
      bottomText : "",
      randomImage : ""
    })

    const [allMemesImages, setAllMemesImages] = React.useState(Data)

    function getImage() {
        const meme = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        const url = memes[randomNumber].url;
        setMemes( prevMeme =>  ({
          ...prevMeme,
          randomImage: url
        }))
    }   

  return (
    <main className="meme">
        <div className="form">
            <input type="text" className="form-input" placeholder="Shutup"></input>
            <input type="text" className="form-input" placeholder="take my money"></input>
            <button onClick={getImage} type="button" className="btn">Get a new meme image</button>
        </div>
        <img src={memes.randomImage} alt="" className='memeImg'/>
    </main>
  )
}



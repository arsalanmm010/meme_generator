import React from 'react';
import Data from './Data'
export default function Meme() {

    // const [link, setLink] = React.useState("");
    const [memess, setMemes] = React.useState({
      topText : "",
      bottomText : "",
      randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemesImages, setAllMemesImages] = React.useState(Data)

    function getImage() {
        const memeArr = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomNumber].url;
        setMemes( prevMeme =>  ({
          ...prevMeme,
          randomImage: url
        }))
    }
    
    function handleChange(event) {
      const {name, value} = event.target
      setMemes( prev => ({
        ...prev,
        [name]: value
      }))
    }

  return (
    <main className="meme">
        <div className="form">
            <input 
              type="text" 
              className="form-input" 
              placeholder="Top Text"
              name='topText'
              value={memess.topText}
              onChange={handleChange}
            />
            <input 
              type="text" 
              className="form-input" 
              placeholder="Bottom Text"
              name='bottomText'
              value={memess.bottomText}
              onChange={handleChange}
            />
            <button 
              onClick={getImage} 
              className="btn">
                Get a new meme image 🖼
            </button>
        </div>
        <div className='joke'>
          <img 
            src={memess.randomImage} 
            alt="" 
            className='memeImg'/>
          <h2 
            className='meme-text top'>
            {memess.topText}</h2>
          <h2 
            className='meme-text bottom'>
            {memess.bottomText}</h2>
        </div>
    </main>
  )
}



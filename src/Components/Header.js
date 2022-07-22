import troll from './Images/troll-face.jpg'

export default function Header() {
  return (
    <div className='header'>
          <img src={troll} alt="" className='troll'/>
          <h2 className='navh'>Meme Generator</h2>
          <p className='navp'>React Course - Project 3</p>
    </div>
  )
}

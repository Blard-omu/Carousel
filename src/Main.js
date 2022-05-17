import React from 'react'
import './App.css'
import { images } from './Data'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Main = () => {

const [currentImg, setcurrentImg] = React.useState(2)


let handleLeft = () => {
    setcurrentImg(currentImg -1)
    if(currentImg === 0)
    setcurrentImg(0)
};

let handleRight = () => {
    setcurrentImg(currentImg +1)
    if(currentImg === 2)
    setcurrentImg(0)
}


  return (
    <div className='carousel'>
                
                
        <div className="carousel-Inner"  style={{backgroundImage: `url(${images[currentImg].img})`}}>


            <div className="left">
                <FaChevronCircleLeft onClick={handleLeft} size={35}/>
            </div>


            <div className="center">
                <h2>{images[currentImg].title}</h2>
            </div>

            <div className="right">
                <FaChevronCircleRight onClick={handleRight} size={35}/>
            </div>
        </div>


        



    </div>
  )
}

export default Main
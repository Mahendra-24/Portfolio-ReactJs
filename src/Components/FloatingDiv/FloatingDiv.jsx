import React from 'react'
import './FloatingDiv.css'
const FloatingDiv = ({image, txt1, txt2}) => {
  return (
    <div className="flatingDiv">
      <img src="{image}" alt=""></img>
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv 
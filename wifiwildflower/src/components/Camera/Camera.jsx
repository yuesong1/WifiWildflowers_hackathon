import React, { useState } from 'react'
import { ItemRecogAPI } from '../ItemRecogAPI'

const Camera = () => {
  const [usePhoto,setPhoto]=useState();

  const handleUploadPhoto=(event)=>{
    console.log(event)
    setPhoto(event.target.files[0].name)
    
    console.log(usePhoto)
    
  }
  const handleSumbit=()=>{
    ItemRecogAPI(usePhoto)
  }

  return (
    <div>
      
      <input accept="image/*" id="icon-button-file" type="file" capture="user" onChange={(e) => {handleUploadPhoto(e)}}/>
      <button onClick={handleSumbit()}> Take a photo</button>
    </div>
  )
}

export default Camera

import React from 'react'

const Camera = () => {
  return (
    <div>
      <button> Take a photo</button>
      <input accept="image/*" id="icon-button-file" type="file" capture/>
    </div>
  )
}

export default Camera

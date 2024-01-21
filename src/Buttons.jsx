import React from 'react'

function Buttons({children,onSelect}) {
  return (
      <div>
          <button onClick={onSelect} style={{backgroundColor:"#7950f2",color:"white"}}>{children}</button>
    </div>
  )
}

export default Buttons
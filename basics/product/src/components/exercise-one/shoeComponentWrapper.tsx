import React from 'react'
import "./wrapper.css"
 
type shoeComponentWrapperProps = {
    children: React.ReactNode
}

const ShoeComponentWrapper = ({children}:shoeComponentWrapperProps) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default ShoeComponentWrapper

import React from 'react'
import "./shimmer.css"
const Shimmer = () => {
  return (
    <div className='shimmer'>
        {Array(20).fill("").map((e,index)=><div key={index} className='shimmerbox'></div>)}
        
    </div>
  )
}

export default Shimmer
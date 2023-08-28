import React from 'react'

const Shimmer = () => {
  return (
    <div>
        
        {Array(30).fill(" ").map((e)=> (
            e= <div classname= "md:max-2xl:mx-40 mx-2 flex flex-wrap justify-between">
            <div className= "w-40 h-40 bg-lime-900 " ></div>
            <div className= "w-40 h-10 bg-lime-900"></div>
            <div className= "w-30 h-8 bg-lime-900"></div>
            <div className= "w-40 h-10 bg-lime-900"></div>
            <div className= "w-30 h-8 bg-lime-900"></div>
        </div>


        ))}
    
    </div>
  )
}

export default Shimmer
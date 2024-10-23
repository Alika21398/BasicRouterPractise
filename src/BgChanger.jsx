import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("black")
  return (
    <>
    {/* since react doesn't recognize dynamic value like{color} we need to add style={} to display css  */}
    <div className={`w-full h-screen `} style={{backgroundColor: color}}>
        <div className='flex justify-center gap-6 bottom-12 inset-x-0'>
            <button className='bg-red-600 border rounded-lg py-2 px-4' onClick={() => {setColor("red")}}>Red</button>
            <button className='bg-blue-600 border rounded-lg py-2 px-4' onClick={() => {setColor("blue")}}>Blue</button>
            <button className='bg-green-600 border rounded-lg py-2 px-4' onClick={() => {setColor("green")}}>Green</button>
            <button className='bg-yellow-600 border rounded-lg py-2 px-4' onClick={() => {setColor("yellow")}}>Yellow</button>
            
            </div>
    </div>
    
      
    </>
  )
}

export default BgChanger

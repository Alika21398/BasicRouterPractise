import React, { useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(0);

    const AddValue = () =>{
        
        setCount(count +1);
       

    }
    const DeleteValue = ()=> {
      if(count> 0){
        setCount(count-1)

      }
      else{
        return 0;
      }
    

    }
    console.log("count", count)
  return (
    <>
  <div className='px-10 py-5 flex justify-between'>
    <button onClick={AddValue}>Add</button>
    <div className='border border-black px-4 py-4 rounded-[50%]'>{count}</div>
    
    <button onClick={DeleteValue}>Delete</button>
    </div>
      
    </>
  )
}

export default Hooks

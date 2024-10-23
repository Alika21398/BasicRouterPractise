import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {
    const error = useRouteError();
    console.log("error", error)
  return (
    <>
    <div className=' w-[1280px] mx-0 my-auto text-center  p-[2rem]'>
    <h2>OOps!!!</h2>
    <p>There is an error</p>
    <p><i>{error.statusText || error.message}</i>
    </p>
    </div>
      
    </>
  )
}

export default Errorpage

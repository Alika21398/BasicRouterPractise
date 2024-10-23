import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'
import Hooks from '../Hooks'
import BgChanger from '../BgChanger'


const Home = () => {
  return (
    <>
    <div className='flex gap-[40px]'>
    <div id="sidebar" className='border bg-blue-200 h-screen w-[400px]  relative'>
       
        <div className='flex justify-between items-center py-5 border-b-2'>
          <form id="search-form" role="search " className='px-10'>
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post" className='px-10'>
            <button type="submit" className='px-4 py-2 rounded-md'>New</button>
          </form>
        </div>
        <nav className='px-10 py-5 border-b-2'>
          <ul >
            <li className='px-4 py-2 bg-blue-700 rounded-2xl text-white'>
              <Link to={`contacts`}>Your Name</Link>
            </li>
           
          </ul>
        </nav>
        < Hooks/>
        <p className='px-10 py-5 border-y-2'>Click here to view <span className='underline text-red-600'><Link to={`bgChanger`}>BgChanger</Link></span></p>
        
        <h1 className='absolute bottom-2 left-10'>React Router Contacts</h1>
      </div>

      {/* outlet tells where the children will be displayed. So here the children contact page is displayed after sidebar. Because it's flex it is at the side  */}
      <div id="detail">
        <Outlet/>
      </div>
      </div>
      

    {/* <nav className='flex justify-between'>
      <div><img className='logo-spin' src={logo} alt="" /></div>
      <ul className='flex gap-5 justify-center'>
       <li className=''>Clothes</li>
       <li>Shoes</li>
       <li> <Link to="/contacts">Contact Us </Link>
       </li>
       <li>About</li>
      </ul>
    </nav> */}
      
    </>
  )
}

export default Home

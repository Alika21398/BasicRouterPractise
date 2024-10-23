import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contacts from './components/Contacts.jsx'
import Errorpage from './components/Errorpage.jsx'
import BgChanger from './BgChanger.jsx'


const router = createBrowserRouter([
  {path:"/",
    element:<Home/>,
    errorElement:<Errorpage/>,
    children : [
      {path:"contacts",
        element: <Contacts/>,
      },
      
    ]
    
  },
  {
    path: "bgchanger",
    element: <BgChanger/>
  },
    // loader: rootLoader,
    
   
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)

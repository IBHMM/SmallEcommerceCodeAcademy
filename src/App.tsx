import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'
import { NavbarContext } from './context/navbar.ts'
import { useState } from 'react'
import { LikedContext } from './context/liked.ts'
import { CardProps } from './types/types.ts'

function App() {

  const [directory, setDirectory] = useState<any>("home")
  const [liked, setLiked] = useState<CardProps[]>([]);

  return (
    <>
      <NavbarContext.Provider value={{activeDirectory: directory, setActiveDirectory: setDirectory}}> 
        <LikedContext.Provider value={{products: liked, setProducts: setLiked}}>
          <RouterProvider router={router} />
        </LikedContext.Provider>
      </NavbarContext.Provider>
    </>
  )
}

export default App

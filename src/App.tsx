import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'
import { NavbarContext } from './context/navbar.ts'
import { useState } from 'react'
import { LikedContext } from './context/liked.ts'
import { CardProps } from './types/types.ts'
import { AuthenticationContext } from './context/authentication.ts'

function App() {

  const [directory, setDirectory] = useState<any>("home")
  const [liked, setLiked] = useState<CardProps[]>([]);
  const [user, setUser] = useState<string>("");

  return (
    <>
      <NavbarContext.Provider value={{activeDirectory: directory, setActiveDirectory: setDirectory}}> 
        <LikedContext.Provider value={{products: liked, setProducts: setLiked}}>
          <AuthenticationContext.Provider value={{user: user, setUser: setUser}}>
            <RouterProvider router={router} />
          </AuthenticationContext.Provider>
        </LikedContext.Provider>
      </NavbarContext.Provider>
    </>
  )
}

export default App

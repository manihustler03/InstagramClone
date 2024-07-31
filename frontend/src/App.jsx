import { useState } from 'react'
import RegisterPage from './componets/Auth/RegisterPage'
import LoginPage from './componets/Auth/LoginPage'
import Navbar from './componets/Main/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <h1>Loginpage</h1>
      
      <img src="vite.svg" alt="" />
      

      <h1>arun kannann</h1>
      <RegisterPage/>
      <LoginPage/>
      

    </>
  )
}

export default App

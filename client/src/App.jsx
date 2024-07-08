import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnauthNavbar from './components/UnauthNavbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UnauthNavbar />
        <p className='text-orange-600'>Some colorful text here</p>
      <Footer />
    </>
  )
}

export default App

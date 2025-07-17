import { HeroSection } from "./components/index";
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
    </>
  )
}

export default App

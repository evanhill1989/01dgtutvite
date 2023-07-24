import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Content />
      <Footer />

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      
     
    </>
  )
}

export default App

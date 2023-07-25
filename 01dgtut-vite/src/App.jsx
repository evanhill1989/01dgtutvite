import { useState } from 'react'


import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='flex flex-col justify-between items-center h-[calc(100vh-2px)]'>

      <Header />
      <Content />
      <Footer />

      
      
     
    </div>
  )
}

export default App

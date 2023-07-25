import React from 'react'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <footer className='bg-blue-500 w-full text-center'>
        <p >© {year}</p>
    </footer>
  )
}

export default Footer
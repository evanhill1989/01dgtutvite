import React from 'react'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

  return (
    <footer>
        <p>© {year}</p>
    </footer>
  )
}

export default Footer
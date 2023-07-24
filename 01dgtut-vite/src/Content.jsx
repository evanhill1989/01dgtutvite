import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names=['John','Paul','George','Ringo'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        return randomName;
    }

  return (
    <main>
        <h2>Hello {handleNameChange()}</h2>
    </main>
  )
}

export default Content
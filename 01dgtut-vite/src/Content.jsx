import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names=['John','Paul','George','Ringo'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        return randomName;
    }

    const handleClick = () => { 
        console.log('button clicked');
    }

    const handleClick2 = (name) => { 
        console.log(`${name} clicked`);
    }
    const handleClick3 = (e) => { 
        console.log(e);
    }

  return (
    <main>
        <h2>Hello {handleNameChange()}</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick2('Dave')}>Click Me</button>
        <button onClick={(e) => handleClick3(e)}>Click Me</button>
        
    </main>
  )
}

export default Content
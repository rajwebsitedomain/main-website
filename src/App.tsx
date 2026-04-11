import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])
  
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App

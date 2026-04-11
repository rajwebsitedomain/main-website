import React, { useEffect } from 'react'
// other imports...

// Correct component syntax
const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
    // Your JSX here
  )
}

export default App

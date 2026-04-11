// All imports at the top
import React, { useEffect } from 'react'
// ... other imports

// Other components, functions, constants
// ... 

// ONLY ONE App component at the end
export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
    // Your JSX here
  )
}

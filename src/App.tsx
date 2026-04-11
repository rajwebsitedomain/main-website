import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  
  return (
    // Your JSX here
  )
}
